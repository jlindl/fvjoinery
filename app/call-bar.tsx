import { BUSINESS, WHATSAPP_HREF } from "./site";
import { PhoneGlyph, WhatsAppGlyph } from "./ui";

/**
 * Mobile-only sticky action bar: call, or message on WhatsApp. Both are direct
 * actions, so this needs no hooks and no route awareness, which is why it is a
 * server component.
 */
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-paper/95 px-3 py-2.5 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <a href={BUSINESS.phoneHref} className="btn btn-primary h-12 flex-1">
          <PhoneGlyph className="h-5 w-5" />
          Call {BUSINESS.phoneDisplay}
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Message FV Joinery on WhatsApp"
          className="btn btn-ghost h-12 px-4"
        >
          <WhatsAppGlyph className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
