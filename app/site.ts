import type { IllustrationVariant } from "./illustrations";

/* ==========================================================================
   BUSINESS DETAILS + SITE COPY — single source of truth.

   House style for anything written here:
     - Plain trade voice. Say the thing, then stop.
     - Concrete over abstract. "Scribed to the wall" beats "attention to detail".
     - Vary sentence length. Avoid three-part lists; they read as filler.
     - Em-dashes are rationed. Use a full stop or a colon instead.
     - No claim we cannot stand behind (no invented guarantees, years, or team
       size). Business facts come from FV's own listings; general guidance is
       written as general guidance.
   ========================================================================== */

export const BUSINESS = {
  name: "FV Joinery and Building Solutions",
  shortName: "FV Joinery",
  initials: "FV",
  base: "Leicestershire",
  phoneDisplay: "07447 907472",
  phoneHref: "tel:+447447907472",
  phoneRaw: "+447447907472",
  email: "infofyvhandyman19@gmail.com",
  instagram: "https://www.instagram.com/fv_joinery_building",
  instagramHandle: "@fv_joinery_building",
  checkatrade: "https://www.checkatrade.com/trades/fvjoineryandbuildingsolutions",
} as const;

export const AREAS = [
  "Leicester",
  "Loughborough",
  "Hinckley",
  "Melton Mowbray",
  "Market Harborough",
  "Coalville",
  "Nottingham",
  "Derby",
  "Birmingham",
  "Coventry",
] as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/* The opening statement. One idea, said once. */
export const STATEMENT =
  "Most houses around here were built before anyone thought about flat-pack. Walls lean, floors dip, and chimney breasts are never quite square. We measure what is actually there and build to those numbers, so the finished job sits tight against the wall instead of being packed out and filled.";

export const TRUST = [
  { k: "Checkatrade", v: "Listed and reviewed" },
  { k: "Free", v: "Quotes and site visits" },
  { k: "Midlands", v: "East and West covered" },
  { k: "Cards", v: "Cash, debit and credit" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Services                                                                  */
/* -------------------------------------------------------------------------- */
export type IconName =
  | "door"
  | "square"
  | "roller"
  | "boards"
  | "tile"
  | "tap"
  | "shelf"
  | "panel"
  | "hexkey"
  | "leaf"
  | "van"
  | "wall";

export type Service = {
  name: string;
  icon: IconName;
  blurb: string;
  detail: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  caption: string;
  /* What the group covers, in one plain sentence for the overview page. */
  summary: string;
  items: Service[];
  /* Photo used to head the group. Falls back to line art if absent. */
  image?: string;
  imageAlt?: string;
  art: IllustrationVariant;
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "joinery",
    title: "Bespoke joinery",
    caption: "Built to the opening you have",
    summary:
      "Made-to-measure work for spaces that no standard unit will fit. Templated on site, built to those exact dimensions, scribed in so the joints close.",
    image: "/work/shelving.jpg",
    imageAlt:
      "Built-in alcove shelving with oak shelves above painted cupboards",
    art: "shelving",
    items: [
      {
        name: "Alcove units and shelving",
        icon: "shelf",
        blurb: "Cupboards and shelves built to fit the recess you actually have.",
        detail:
          "Chimney breasts are rarely square and the two alcoves either side are rarely the same width. We template each opening rather than working off one measurement, build the carcass to those numbers, then scribe it to the wall. Shelves can be fixed or adjustable. Painted, or in a timber you pick.",
      },
      {
        name: "Wall panelling",
        icon: "panel",
        blurb: "Shaker, slat or traditional, set out to the room.",
        detail:
          "The setting out is what makes panelling look right. Panel widths get worked backwards from the wall length so the layout stays even and lands sensibly around sockets, switches and door casings. We fill, caulk and sand ready for paint, or supply it finished.",
      },
      {
        name: "Doors, skirting and architrave",
        icon: "door",
        blurb: "Hung square, with an even gap the whole way round.",
        detail:
          "Hinges chiselled in properly so the door sits flush and the latch lines up first time. New skirting and architrave run to match, including mitres cut to whatever angle a corner actually is. If you only need part of a room replacing we will match the existing profile.",
      },
      {
        name: "Repairs and reassembly",
        icon: "hexkey",
        blurb: "Loose joints, worn finishes, and flat-pack rebuilt to last.",
        detail:
          "Knocked-apart joints re-glued and cramped, damaged veneer patched, worn finishes cut back and rebuilt. Flat-pack furniture assembled square, levelled on uneven floors and fixed back to the wall where it needs to be.",
      },
    ],
  },
  {
    id: "building",
    title: "Building and renovation",
    caption: "The structural side of a project",
    summary:
      "Rooms taken back to brick and rebuilt. We handle the sequence so trades turn up in the right order and the job does not stall halfway.",
    image: "/work/kitchen.jpg",
    imageAlt: "A fitted kitchen with wood-effect units and a stone worktop",
    art: "kitchen",
    items: [
      {
        name: "Kitchen fitting",
        icon: "tap",
        blurb: "Strip-out to finished, or a single run of units swapped.",
        detail:
          "Base units levelled off the highest point of the floor and locked together before anything goes on top. Worktops cut and joined on site, splashbacks tiled, appliances fitted and tested. We book the plumber and electrician around our own programme so nobody is waiting on anybody.",
      },
      {
        name: "Bathroom installation",
        icon: "tile",
        blurb: "Suites, tiling, boxing-in and sealing.",
        detail:
          "Old suite out, pipework moved where the new layout needs it, walls boarded with the right board for a wet area. Tiled, grouted and sealed. Boxing-in built with access panels where a valve or a stop tap sits behind it, because sooner or later somebody will need to get at it.",
      },
      {
        name: "Carpentry and structural work",
        icon: "square",
        blurb: "Stud walls, framing, floors and second fix.",
        detail:
          "Partitions built and boarded, openings framed and supported, joists and floorboards repaired. Second-fix carpentry finished clean. Where a job needs a structural engineer or building control sign-off we will tell you at quote stage rather than halfway through.",
      },
      {
        name: "Plastering and making good",
        icon: "wall",
        blurb: "Skim, patch, and repairs after other work.",
        detail:
          "Fresh skim over new board, patch repairs where old plaster has blown, and making good around anything that has been cut in. Flattened properly, because low winter sun across a wall shows up every ripple that was left in it.",
      },
    ],
  },
  {
    id: "finishes",
    title: "Finishes and outdoor",
    caption: "The last ten per cent, and the garden",
    summary:
      "The stage that decides how the whole job reads. Plus fencing, decking and clearance for the space outside.",
    image: "/work/flooring.jpg",
    imageAlt: "Engineered wood flooring being laid plank by plank",
    art: "flooring",
    items: [
      {
        name: "Flooring",
        icon: "boards",
        blurb: "Laminate, engineered board, LVT and vinyl.",
        detail:
          "The subfloor gets levelled first. Nothing you lay on top hides a dip, and a bad base is what makes a floor creak two winters later. Boards laid with the correct expansion gap, thresholds and beading to match, and doors eased to clear the new height.",
      },
      {
        name: "Painting and decorating",
        icon: "roller",
        blurb: "Prepared first, then painted.",
        detail:
          "Filling, sanding and caulking is most of the work and all of the difference. Cut-in lines kept sharp, everything sheeted before a tin is opened, and the room put back and swept at the end of each day rather than at the end of the week.",
      },
      {
        name: "Fencing, decking and clearance",
        icon: "leaf",
        blurb: "Outdoor work built to stay put.",
        detail:
          "Posts concreted rather than knocked in, so a gale in February does not take the run down. Decking framed with proper bearer spacing and airflow underneath. Overgrown ground cleared and taken away.",
      },
      {
        name: "Removals",
        icon: "van",
        blurb: "Packing and moving, one van or several.",
        detail:
          "Furniture wrapped, loaded and rebuilt at the other end. Mostly useful when we are already fitting out the new place and you would rather deal with one number than three.",
      },
    ],
  },
];

export const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.items);

/* -------------------------------------------------------------------------- */
/*  Process                                                                   */
/* -------------------------------------------------------------------------- */
export const PROCESS = [
  {
    n: "01",
    t: "You get in touch",
    d: "Call or send the form. Rough sizes and a photo of the space help more than you would think.",
  },
  {
    n: "02",
    t: "We come and look",
    d: "Measuring up in person, and talking through what is realistic in the space. This costs nothing.",
  },
  {
    n: "03",
    t: "You get a written price",
    d: "Itemised, so you can see what each part costs and drop anything you would rather not do yet.",
  },
  {
    n: "04",
    t: "We book it in",
    d: "Agreed dates, and a call from us if anything moves. Site sheeted up and swept at the end of each day.",
  },
  {
    n: "05",
    t: "We walk it with you",
    d: "Snags sorted before we take the tools out. The job is not finished until you say it is.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Honest pricing guidance.                                                  */
/*  General trade guidance, deliberately not priced: FV quote per job.        */
/* -------------------------------------------------------------------------- */
export const PRICE_FACTORS = [
  {
    t: "How true the room is",
    d: "A square room with a level floor is quick. One with a bowed wall and a floor that drops 30mm across it needs packing, scribing and more time on site. This is the single biggest swing on a joinery price.",
  },
  {
    t: "Whether services have to move",
    d: "Leaving a socket, a radiator or a waste pipe where it is costs nothing. Moving one brings in another trade and usually a bit of making good afterwards.",
  },
  {
    t: "What it is made from",
    d: "Painted work in MDF is the cheapest route and looks sharp. Hardwood costs more and takes longer to finish, but it is what you want if the grain is going to be on show.",
  },
  {
    t: "Access",
    d: "A ground-floor room you can park outside is straightforward. Third floor, no lift, and a shared stairwell adds real hours to a fit that has to go up in pieces.",
  },
] as const;

/* Material guidance. Factual, and useful when choosing. */
export const MATERIALS = [
  {
    t: "MDF",
    use: "Painted work",
    d: "Stable, no grain, and takes paint better than timber. The right choice for panelling and painted alcove units. Moisture-resistant grade in bathrooms and utilities.",
  },
  {
    t: "Hardwood",
    use: "Anything on show",
    d: "Oak, ash and walnut for shelves and worktops where the grain is the point. Moves with the seasons, so it needs building with that allowed for.",
  },
  {
    t: "Birch ply",
    use: "Exposed edges",
    d: "The layered edge is a finish in its own right. Good for carcasses and shelving where you want something plainer than hardwood but better than a foil wrap.",
  },
  {
    t: "Softwood",
    use: "Framing and outdoors",
    d: "Studwork, bearers and fencing. Treated grade for anything in contact with the ground.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Work / gallery                                                            */
/*  Captions describe what the photograph shows and what that job involves.   */
/* -------------------------------------------------------------------------- */
export type WorkItem = {
  subject: string;
  note: string;
  art: IllustrationVariant;
  src?: string;
  alt?: string;
  detail: string;
  /* Rendered as a wide tile in the mosaic. */
  wide?: boolean;
};

export const WORK: WorkItem[] = [
  {
    subject: "Alcove shelving",
    note: "Bespoke joinery",
    art: "shelving",
    src: "/work/shelving.jpg",
    alt: "Built-in alcove shelving with oak shelves above painted cupboards",
    detail:
      "Two recesses either side of a chimney breast, templated separately because they were not the same width. Cupboards below, open shelves above.",
    wide: true,
  },
  {
    subject: "Kitchen fit",
    note: "Building and renovation",
    art: "kitchen",
    src: "/work/kitchen.jpg",
    alt: "A fitted kitchen with wood-effect units and a stone worktop",
    detail:
      "Units levelled and locked together, worktop cut on site, splashback tiled and appliances fitted.",
  },
  {
    subject: "Bathroom re-tile",
    note: "Building and renovation",
    art: "bathroom",
    src: "/work/bathroom.jpg",
    alt: "A re-tiled bathroom with grey metro tiles and a walk-in shower",
    detail:
      "Stripped back, re-boarded for a wet area, then tiled, grouted and sealed with the pipework boxed in.",
  },
  {
    subject: "Wall panelling",
    note: "Bespoke joinery",
    art: "panelling",
    src: "/work/panelling.jpg",
    alt: "Timber wall panelling fitted around a corner",
    detail:
      "Panel widths set out from the wall length so the spacing stays even as it turns the corner.",
  },
  {
    subject: "Engineered flooring",
    note: "Finishes",
    art: "flooring",
    src: "/work/flooring.jpg",
    alt: "Engineered wood flooring being laid plank by plank",
    detail:
      "Subfloor levelled first, then boards laid with the correct expansion gap and matching trims.",
  },
  {
    subject: "Decorating",
    note: "Finishes",
    art: "painting",
    src: "/work/painting.jpg",
    alt: "A wall being painted with a roller and sharp cut-in edges",
    detail:
      "Filled, sanded and caulked before any paint went on. That stage is most of the job.",
    wide: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQs                                                                      */
/* -------------------------------------------------------------------------- */
export const FAQS = [
  {
    q: "What does a quote cost?",
    a: "Nothing. We come out, measure up and send an itemised price. There is no charge for the visit and no expectation that you go ahead.",
  },
  {
    q: "How far do you travel?",
    a: `We are based in ${BUSINESS.base} and work across the East and West Midlands, so Leicester, Nottingham, Derby, Birmingham and Coventry are all normal. Ask if you are further out; it is usually still worth a conversation.`,
  },
  {
    q: "Can you work from my drawings or a photo I have seen?",
    a: "Yes. A saved photo is genuinely useful, because it tells us the look you are after faster than a description does. We will say up front if something in it will not work in your space.",
  },
  {
    q: "Do I need to be in while you work?",
    a: "Not usually. Plenty of customers leave a key. We will agree access before the first day rather than sorting it out on the morning.",
  },
  {
    q: "How much mess is there?",
    a: "Cutting is done outside or under extraction where we can. Floors get sheeted, and the room is swept at the end of each day rather than left until the end of the job.",
  },
  {
    q: "How do I pay?",
    a: "Cash, debit or credit card. On bigger projects the payment stages are written on the quote before anything starts, so there are no surprises about when money is due.",
  },
  {
    q: "How soon can you start?",
    a: "It depends what is already booked. You will get a realistic date at quote stage rather than an optimistic one. Small jobs can often be slotted in sooner.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Reviews                                                                   */
/*  From FV's Checkatrade profile. Verify wording against the live profile    */
/*  before launch, and add new ones here as they come in.                     */
/* -------------------------------------------------------------------------- */
export const REVIEWS = [
  {
    quote:
      "Franky was true to his word and carried out the work to a high standard. Would 100% recommend and will use his services again.",
    name: "Verified customer",
    place: "Kitchen, tiling and flooring",
    source: "Checkatrade",
  },
] as const;
