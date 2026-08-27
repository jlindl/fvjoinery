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
  /* wa.me wants the number in full international form with no plus or spaces. */
  whatsappNumber: "447447907472",
  email: "infofyvhandyman19@gmail.com",
  instagram: "https://www.instagram.com/fv_joinery_building",
  instagramHandle: "@fv_joinery_building",
  tiktok: "https://www.tiktok.com/@fvjoneryandbuilding",
  tiktokHandle: "@fvjoneryandbuilding",
  /* TODO: swap for the real Google Business Profile share link (Google Maps >
     the business > Share). This Maps search finds the business and works, but
     a profile link is what you want on a "read our reviews" button. */
  google:
    "https://www.google.com/maps/search/?api=1&query=FV+Joinery+and+Building+Solutions+Leicestershire",
} as const;

/* The quote buttons open WhatsApp with this already typed, so the customer
   only has to describe the job. Keep the trailing colon: it prompts them to
   carry on rather than sending a bare greeting. */
export const WHATSAPP_TEXT = "Hi FV Joinery, I'd like a quote. The job is:";

export const WHATSAPP_HREF = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

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
  { k: "5 star", v: "Rated on Google" },
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
  | "cabin"
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
    image: "/work/doors-black.jpg",
    imageAlt:
      "Three doors in a dark finish hung off a landing, with white architrave",
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
    image: "/work/bathroom-2.jpg",
    imageAlt:
      "A bathroom vanity: a counter-top basin on a solid timber top over green shaker doors",
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
      "The stage that decides how the whole job reads. Plus the work outside: garden rooms, fencing, decking and clearance.",
    image: "/work/decking.jpg",
    imageAlt:
      "Grey composite decking laid up to the doors of a cedar-clad garden room",
    art: "gardenroom",
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
        name: "Garden rooms and outbuildings",
        icon: "cabin",
        blurb: "Built on site, from the base up.",
        detail:
          "Base laid and levelled first, then framed, insulated, clad and roofed. Doors and windows set out across the elevation so the cladding lands evenly either side of them. Power and lighting run in by an electrician. If the size or the position means you need planning permission or building control, we will say so at quote stage rather than after the base is down.",
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
  /* Fallback drawing if a photo is ever removed. Nothing on the site renders
     one today: every entry below carries a real photograph. */
  art: IllustrationVariant;
  src?: string;
  alt?: string;
  detail: string;
  /* Rendered as a wide tile in the home mosaic. Ignored on the Work page,
     which lays every job out as a full-width row. */
  wide?: boolean;
  /* Shown in the home-page mosaic. The four flagged here are the four photos
     that appear nowhere else on the home page, so nothing repeats down it. */
  onHome?: boolean;
  /* More angles of the same job. When set, the Work page renders a carousel
     instead of a single photo, starting from `src`. Only worth it when the
     extra frames show something the first one cannot. */
  gallery?: { src: string; alt: string }[];
};

/* Every entry is a photograph of our own work. The Work page renders these as
   3:2 rows, so a photo only belongs here if it survives that crop. */
export const WORK: WorkItem[] = [
  {
    subject: "Shaker kitchen and island",
    note: "Building and renovation",
    art: "kitchen",
    src: "/work/kitchen-green.jpg",
    alt: "A sage green shaker kitchen with a marble-topped island beneath a glazed lantern roof",
    detail:
      "Fitted under a new lantern roof, so the runs were set out to the light rather than to the old room. Island brought in as one piece and levelled before the worktop went on.",
  },
  {
    subject: "Cedar-clad garden room",
    note: "Outdoor building",
    art: "gardenroom",
    src: "/work/garden-room-cedar.jpg",
    alt: "A timber-clad garden room with a flat roof and a run of anthracite bi-fold doors",
    detail:
      "Framed, clad and roofed on site. The bi-folds run the length of one elevation, so that wall was built plumb first and the frames set into a squared opening.",
    wide: true,
    onHome: true,
  },
  {
    subject: "Handleless kitchen",
    note: "Building and renovation",
    art: "kitchen",
    src: "/work/kitchen-dark.jpg",
    alt: "A dark handleless kitchen in a U-shape with a stone worktop, range cooker and split-face stone wall",
    detail:
      "A U-shaped run with a range in the middle, so the two returns had to line through. Worktops cut and joined on site, and the stone wall built back to the corner.",
    onHome: true,
  },
  {
    subject: "Internal doors and architrave",
    note: "Bespoke joinery",
    art: "door",
    src: "/work/doors-oak.jpg",
    alt: "Three oak cottage doors hung off a landing, with white architrave and wood-effect flooring",
    detail:
      "Three doors off one landing, so the gaps had to match each other as well as their own frames. Hinges chiselled in flush, architrave mitred to the angles the openings actually were.",
    onHome: true,
  },
  {
    subject: "Bathroom installation",
    note: "Building and renovation",
    art: "bathroom",
    src: "/work/bathroom-1.jpg",
    alt: "A loft bathroom with patterned floor tiles, a metro-tiled walk-in shower, a green vanity unit and a bespoke door into the eaves",
    detail:
      "A room with a sloping ceiling, so the shower went where the headroom was. Patterned floor set out from the centre line to keep the cuts equal at both walls, and the eaves cupboard door made to match the vanity.",
    gallery: [
      {
        src: "/work/bathroom-1.jpg",
        alt: "The bathroom looking towards the walk-in shower, with a bespoke green door into the eaves on the left",
      },
      {
        src: "/work/bathroom-2.jpg",
        alt: "The vanity unit under the window: a counter-top basin on a solid timber top over green shaker doors, with metro tiling behind",
      },
      {
        src: "/work/bathroom-3.jpg",
        alt: "The full width of the bathroom, with the WC beside the vanity and the tiled shower enclosure to the right",
      },
    ],
  },
  {
    subject: "Composite decking",
    note: "Finishes and outdoor",
    art: "gardenroom",
    src: "/work/decking.jpg",
    alt: "Grey composite decking laid up to the doors of a cedar-clad garden room",
    detail:
      "Framed at the bearer spacing the boards needed, with airflow left underneath. Set to fall away from the building so water never sits against the cladding.",
  },
  {
    subject: "Garden room, anthracite",
    note: "Outdoor building",
    art: "gardenroom",
    src: "/work/garden-room-grey.jpg",
    alt: "A dark grey clad garden room with French doors and side windows, set on a level base",
    detail:
      "Base laid and levelled before anything was framed. Doors and windows set out symmetrically across the front so the cladding boards land evenly either side.",
    wide: true,
    onHome: true,
  },
];

/* The home page shows a subset and links through to the full gallery. */
export const HOME_WORK = WORK.filter((w) => w.onHome);

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

/*  Reviews                                                                   */
/*                                                                            */
/*  ONLY real, published reviews go in this array. Never write one, never      */
/*  paraphrase one into something snappier, and never pad the list to make the */
/*  section look fuller. Publishing an invented testimonial is illegal in the  */
/*  UK (Digital Markets, Competition and Consumers Act 2024) and Google        */
/*  delists businesses for it.                                                */
/*                                                                            */
/*  To add one: open the review, copy the text exactly as written, and fill    */
/*  in every field below. `source` decides the label and which profile it      */
/*  links to.                                                                 */
/*                                                                            */
/*  The nine below are verbatim from Google. Reviews whose text was cut off    */
/*  with "...More" were left out rather than completed from guesswork, so      */
/*  there are more on the profile than are shown here.                        */
/*                                                                            */
/*  All nine are 5 star, confirmed by FV. `rating` is out of 5 and drives the  */
/*  star row, so set it on any review added later rather than leaving it to    */
/*  default: an unrated review renders with no stars beside the ones that have */
/*  them, which reads as a worse review rather than an unknown one.            */
/* -------------------------------------------------------------------------- */
export type ReviewSource = "Google";

export type Review = {
  quote: string;
  name: string;
  /* What the job was, in a few words. Shown under the name. */
  place: string;
  source: ReviewSource;
  rating?: 1 | 2 | 3 | 4 | 5;
};

export const REVIEWS: Review[] = [
  {
    quote:
      "We are extremely happy with the worktop and splashback installation. The quality of workmanship is excellent, and the finish looks fantastic. Professional, reliable, and very tidy throughout the job. Would definitely recommend.",
    name: "Fabio Buitrago",
    place: "Worktop and splashback",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Amazing!!!!! To get someone to come out for a small job (6 interior doors to be fitted) is a miracle, but Frankie quoted, then came and did the job, excellently, he is a diamond. Have already asked him for a quote on another job. Courteous, friendly and put up with my dogs!!. Highly recommend.",
    name: "Christine Bedford",
    place: "Six internal doors",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Really happy to recommend FV joinery. They did an amazing job in my kitchen and really pleased with the floor tiling. Super efficient, friendly and reasonably priced for a great job. 5 * rating. Thank you.",
    name: "Louise Collinge",
    place: "Kitchen and floor tiling",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Very happy with the work. New shower fitted and various other small plumbing works carried out. Communication was good before the appointment. They came when they said they would. Polite, professional and respectful. Very little fuss. Will use again and would recommend to others.",
    name: "Chris Moore",
    place: "New shower and plumbing",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Franky from Fv joinery replaced the worktops in our kitchen and did an excellent job- highly recommend. High quality work and great communication from the start. Will be asking Franky to do further work.",
    name: "Naomi",
    place: "Kitchen worktops",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Great workmanship, nothing too much trouble when things didn't always go to plan. Bathroom looks great thank you. Highly recommend.",
    name: "Andy Keeney",
    place: "Bathroom",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Amazing and friendly service! I tried my best to put my nans shed together but Franky came to rescue. Managed to arrange convenient time that week and installed the Shed so efficiently. My nan was so pleased once it was finished. Would highly recommend to any one needing any joinery jobs doing.",
    name: "Nariah Francis",
    place: "Shed installation",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Excellent work carried out on our doors, very professional, work was to a high standard and both kept everything very tidy and clean. I would highly recommend Frankie and team. Thank you!",
    name: "Bally Dhillon",
    place: "Internal doors",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Franky showed up when said he would, very reliable despite the freezing conditions he did the job. Perfect finish to this installation only job.",
    name: "Pammie T Mahaka",
    place: "Installation only",
    source: "Google",
    rating: 5,
  },
];

export const REVIEW_LINKS: Record<ReviewSource, string> = {
  Google: BUSINESS.google,
};

/* -------------------------------------------------------------------------- */
/*  Before and after                                                          */
/*                                                                            */
/*  Every pair below is a real job, shot from the same spot at the start and   */
/*  at the end. To add one, drop the two files in public/before-after/ and     */
/*  copy an entry. Set `placeholder: true` on anything still waiting on real   */
/*  photos and it renders an "Awaiting photos" badge, so a stand-in cannot     */
/*  ship unnoticed. Nothing uses it at the moment.                            */
/* -------------------------------------------------------------------------- */
export type BeforeAfter = {
  subject: string;
  note: string;
  detail: string;
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
  placeholder?: boolean;
};

export const BEFORE_AFTER: BeforeAfter[] = [
  {
    subject: "Garden room, framed to finished",
    note: "Outdoor building",
    detail:
      "Studwork, bracing and the roof deck go up first, and everything after that hangs off getting this stage square. Insulated and clad once it was closed in, with the doors set out on the centre line of the front elevation.",
    before: "/before-after/garden-room-frame-before.jpg",
    beforeAlt:
      "A garden room at frame stage: bare timber studs and bracing under a finished flat roof, open at the front",
    after: "/before-after/garden-room-frame-after.jpg",
    afterAlt:
      "The same garden room finished in cedar cladding with French doors and full-height windows either side",
  },
  {
    subject: "Knocked-through opening, doors hung",
    note: "Bespoke joinery",
    detail:
      "A bare opening between two rooms, squared and lined before anything was hung in it. Three doors after, set so the gaps between them match each other as well as the frame.",
    before: "/before-after/doors-before.jpg",
    beforeAlt:
      "A wide bare opening between two rooms, lined but with no doors fitted",
    after: "/before-after/doors-after.jpg",
    afterAlt:
      "The same opening with three glazed white doors hung in it, protective film still on the glass",
  },
  {
    subject: "Garden room, shell to finished",
    note: "Outdoor building",
    detail:
      "Framed and sheathed first, and made weathertight before any cladding went near it. The cedar goes on last so the boards can be set out to land evenly either side of the doors.",
    before: "/before-after/garden-room-before.jpg",
    beforeAlt:
      "A garden room part-built, still in bare OSB sheathing with the doors fitted and no cladding",
    after: "/before-after/garden-room-after.jpg",
    afterAlt:
      "The same garden room finished in cedar cladding with an anthracite roof trim and window",
  },
  {
    subject: "Floor levelled and laid",
    note: "Finishes and outdoor",
    detail:
      "The screed underneath had lifted and cracked right across the room. Levelled first, because nothing you lay on top hides a dip, then set out so the pattern runs square to the window wall.",
    before: "/before-after/flooring-before.jpg",
    beforeAlt:
      "A bare room with cracked, patchy screed where the old floor covering has been lifted",
    after: "/before-after/flooring-after.jpg",
    afterAlt:
      "The same room with parquet-effect flooring laid, running square to the window wall",
  },
];


