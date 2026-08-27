const puppeteer = require("puppeteer-core");
const fs = require("fs");
const BASE = "http://localhost:3199";
const OUT = process.argv[2];
const PAGES = ["/", "/services", "/work", "/about", "/contact"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function wheelToBottom(page) {
  await page.mouse.move(600, 400);
  let last = -1, stuck = 0;
  for (let i = 0; i < 400; i++) {
    const st = await page.evaluate(() => ({
      y: window.scrollY,
      h: document.body.scrollHeight,
      vh: window.innerHeight,
    }));
    if (st.y + st.vh >= st.h - 4) return true;
    if (st.y === last) { if (++stuck > 6) return false; } else stuck = 0;
    last = st.y;
    await page.mouse.wheel({ deltaY: 420 });
    await sleep(90);
  }
  return false;
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: "new",
    args: ["--force-device-scale-factor=1"],
  });
  let failures = 0;
  const fail = (m) => { failures++; console.log("  FAIL " + m); };

  for (const path of PAGES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 60000 });

    // --- style guard: never audit an unstyled page -------------------------
    const guard = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      return {
        sheets: document.styleSheets.length,
        h1px: h1 ? parseFloat(getComputedStyle(h1).fontSize) : 0,
        bg: getComputedStyle(document.body).backgroundColor,
      };
    });
    console.log(`\n${path}  sheets=${guard.sheets} h1=${guard.h1px}px body=${guard.bg}`);
    if (guard.sheets === 0) { fail("no stylesheets — server is stale"); await page.close(); continue; }
    if (guard.h1px < 28) fail(`h1 only ${guard.h1px}px — CSS likely not applied`);

    await wheelToBottom(page);
    await sleep(900);
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(400);
    await wheelToBottom(page);
    await sleep(1200);

    // --- images actually decoded ------------------------------------------
    const imgs = await page.evaluate(async () => {
      const list = [...document.images];
      await Promise.all(list.map((i) => i.decode().catch(() => {})));
      return list.map((i) => ({
        src: i.currentSrc.replace(/^.*?url=/, "").split("&")[0],
        w: i.naturalWidth,
        alt: i.alt,
        shown: i.getBoundingClientRect().width,
      }));
    });
    const broken = imgs.filter((i) => i.w === 0);
    console.log(`  images ${imgs.length - broken.length}/${imgs.length} decoded`);
    imgs.forEach((i) => console.log(`    ${decodeURIComponent(i.src)}  nat=${i.w} css=${Math.round(i.shown)}  alt="${i.alt.slice(0, 46)}"`));
    if (broken.length) fail(`${broken.length} image(s) failed to decode`);
    const noAlt = imgs.filter((i) => !i.alt.trim());
    if (noAlt.length) fail(`${noAlt.length} image(s) with empty alt`);

    // --- hidden / never-revealed text -------------------------------------
    const hidden = await page.evaluate(() => {
      const out = [];
      document.querySelectorAll("h1,h2,h3,p,li,a,span").forEach((el) => {
        const t = (el.textContent || "").trim();
        if (!t || el.children.length) return;
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;
        if (parseFloat(cs.opacity) < 0.05 || cs.visibility === "hidden")
          out.push(t.slice(0, 60));
      });
      return out;
    });
    console.log(`  hidden text: ${hidden.length}`);
    hidden.forEach((h) => fail(`invisible: "${h}"`));

    // --- true-pixel contrast ----------------------------------------------
    const contrast = await page.evaluate(() => {
      const lum = (r, g, b) => {
        const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
        return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
      };
      const cvv = document.createElement("canvas");
      cvv.width = cvv.height = 1;
      const cx = cvv.getContext("2d", { willReadFrequently: true });
      const parse = (s) => {
        cx.fillStyle = "#000"; cx.fillStyle = s;
        cx.clearRect(0, 0, 1, 1); cx.fillRect(0, 0, 1, 1);
        const d = cx.getImageData(0, 0, 1, 1).data;
        return { r: d[0], g: d[1], b: d[2], a: d[3] / 255 };
      };
      const over = (fg, bg) => ({
        r: fg.r * fg.a + bg.r * (1 - fg.a),
        g: fg.g * fg.a + bg.g * (1 - fg.a),
        b: fg.b * fg.a + bg.b * (1 - fg.a),
        a: 1,
      });
      const bgOf = (el) => {
        let n = el;
        while (n && n !== document.documentElement) {
          const c = parse(getComputedStyle(n).backgroundColor);
          if (c.a > 0.92) return c;
          n = n.parentElement;
        }
        return { r: 255, g: 255, b: 255, a: 1 };
      };
      const bad = [];
      document.querySelectorAll("h1,h2,h3,h4,p,li,a,span,dt,dd,summary,button,label").forEach((el) => {
        const t = (el.textContent || "").trim();
        if (!t || el.children.length) return;
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) return;
        const cs = getComputedStyle(el);
        if (parseFloat(cs.opacity) < 0.1) return;
        const bg = bgOf(el);
        const fg = over(parse(cs.color), bg);
        const L1 = lum(fg.r, fg.g, fg.b), L2 = lum(bg.r, bg.g, bg.b);
        const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
        const px = parseFloat(cs.fontSize);
        const large = px >= 24 || (px >= 18.66 && parseInt(cs.fontWeight) >= 700);
        const need = large ? 3 : 4.5;
        if (ratio < need) bad.push(`${ratio.toFixed(2)}<${need} ${px}px "${t.slice(0, 44)}"`);
      });
      return bad;
    });
    console.log(`  contrast failures: ${contrast.length}`);
    contrast.forEach((c) => fail("contrast " + c));

    // --- horizontal overflow ----------------------------------------------
    for (const w of [390, 768, 1440]) {
      await page.setViewport({ width: w, height: 900 });
      await sleep(350);
      const o = await page.evaluate(() => {
        const d = document.documentElement;
        const wide = [...document.querySelectorAll("body *")]
          .filter((e) => e.getBoundingClientRect().right > d.clientWidth + 1)
          .slice(0, 3)
          .map((e) => e.tagName + "." + String(e.className).slice(0, 40));
        return { over: d.scrollWidth > d.clientWidth + 1, wide };
      });
      console.log(`  overflow @${w}: ${o.over}${o.over ? " " + JSON.stringify(o.wide) : ""}`);
      if (o.over) fail(`horizontal overflow at ${w}px`);
    }

    await page.setViewport({ width: 1440, height: 900 });
    await sleep(300);
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(500);
    await wheelToBottom(page);
    await sleep(900);
    await page.screenshot({
      path: `${OUT}/shot${path === "/" ? "-home" : path.replace(/\//g, "-")}.jpg`,
      fullPage: true,
      quality: 55,
      type: "jpeg",
    });
    await page.close();
  }

  await browser.close();
  console.log(failures === 0 ? "\n=== ALL CHECKS PASS ===" : `\n=== ${failures} FAILURE(S) ===`);
  process.exit(failures ? 1 : 0);
})();
