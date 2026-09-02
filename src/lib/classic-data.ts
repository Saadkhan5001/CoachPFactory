// Coach P Factory — main site content.
//
// Copy is sourced from the approved Coach P Factory copy document
// (coach-p-factory reference, Aug 2026). Design/layout remains the
// approved "classic" experience — only content lives here.
//
// NOTE: Services, Process, Reviews and FAQ copy is carried over from the
// approved classic version (no counterpart in the copy document).
// Transformation/review imagery remains placeholder until real client
// photos are supplied. Online-package pricing is on request per the doc.

export const CLASSIC_BRAND = {
  name: "Coach P",
  instagram: "https://www.instagram.com/coachp_factory",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "The Standard", href: "#services" },
  { label: "Results", href: "#stories" },
  { label: "Packages", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_STATS = [
  { value: "32", suffix: "", label: "Years Experience" },
  { value: "10", suffix: "", label: "Sessions per Package" },
];

export const ABOUT_CREDENTIALS = [
  {
    title: "32 Years Under the Bar",
    subtitle: "Training since age sixteen",
    icon: "medal" as const,
  },
  {
    title: "Martial Arts Background",
    subtitle: "Five to six years of fighting",
    icon: "certificate" as const,
  },
];

export const ABOUT_BIO = [
  "Soccer, football, volleyball, track. Then martial arts, and five to six years of fighting. At sixteen, a friend put him on a bench press for the first time — he fell in love with it that day. The pain, the work, the feeling afterward. That was three decades ago, and it hasn't let up since.",
  "Training became the way he relates to everything else. The gym is where you learn to meet resistance, stay consistent when nothing seems to be happening, and keep showing up until it does. That's the part he coaches, alongside the reps.",
  "Today that experience runs through 1-on-1 training, small group sessions, kickboxing, bodybuilding protocols and online coaching — with the same standard applied to all of them.",
];

// The road here — bio timeline from the copy doc.
export const ABOUT_TIMELINE = [
  {
    when: "Age 10",
    what: "Competitive sport begins — soccer, football, volleyball, track.",
  },
  {
    when: "Teens",
    what: "Martial arts. Five to six years of fighting, under an instructor obsessed with detail.",
  },
  {
    when: "Age 16",
    what: "First time on a bench press. Never stopped.",
  },
  {
    when: "Age 18–19",
    what: "First paying client, from a stranger on the gym floor.",
  },
  {
    when: "Today",
    what: "32 years training. 1-on-1, group, kickboxing, bodybuilding and online coaching.",
  },
];

// "The standard" — the copy doc's three principles, plus the concrete
// details that define what "attention to detail" actually means and the
// Coach P quote that anchors the section.

/** The specifics, verbatim from the copy doc's lede — what detail means. */
export const STANDARD_DETAILS = [
  "How you set your feet",
  "Where the load sits",
  "Your last three inches of range",
];

export const STANDARD_PRINCIPLES = [
  {
    n: "01",
    label: "Technique First",
    title: "Form Is Coached, Not Assumed",
    body: "Every exercise gets corrected in real time. The better you execute a movement, the more efficiently the body responds — and the sooner you see it in the mirror.",
  },
  {
    n: "02",
    label: "Fewer Setbacks",
    title: "Injuries End Programs",
    body: "Sloppy reps are how people get hurt and disappear for six weeks. Precision isn't slower — it's what keeps you in the gym long enough to change.",
  },
  {
    n: "03",
    label: "No Corners Cut",
    title: "Fast, the Honest Way",
    body: "The goal is to get you to results before frustration wins — without shortcuts. Efficient work beats extra work every time.",
  },
];

export const STANDARD_QUOTE = {
  quote:
    "My martial arts instructor was a stickler for detail. That's the same thing I bring to every session.",
  attribution: "Coach P",
};

// "How sessions work" content from the copy doc, as the five process steps.
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Pick Your Lane",
    body: "Choose your package — 1-on-1, group, kickboxing, bodybuilding or online. Your balance is set the moment you buy.",
  },
  {
    number: "02",
    title: "Book Your Slot",
    body: "Choose the time window that fits your day. The most requested windows go early, so lock in the slot you want.",
  },
  {
    number: "03",
    title: "Check In at the Door",
    body: "One tap when you arrive. The session comes off the package and your balance updates on your phone.",
  },
  {
    number: "04",
    title: "Follow the Protocol",
    body: "Measurements, weight tracking and a meal protocol cover the twenty-three hours a day you're not on the floor.",
  },
  {
    number: "05",
    title: "Finish the Cycle",
    body: "Thirty days from your first session. Unused sessions don't roll over — which is exactly why they get used.",
  },
];

export const PROCESS_STATS = [
  { value: "10", suffix: "", label: "Sessions per Cycle" },
  { value: "30", suffix: "", label: "Days to Use Them" },
];

export type Transformation = {
  quote: string;
  name: string;
  meta: string;
  before: string;
  after: string;
};

// Real client results from the copy document (placeholder imagery).
export const TRANSFORMATIONS: Transformation[] = [
  {
    quote:
      "She'd been in the gym six or seven months with nothing to show for it, walked up on the floor and asked for help. First month training together, nine pounds down. Everything since has been built on what that month proved.",
    name: "The First Client",
    meta: "9 lbs down in her first month",
    before: "/images/classic/before-david.jpg",
    after: "/images/classic/after-david.jpg",
  },
  {
    quote:
      "He arrived at 280 with a hard deadline and impeccable discipline — calling before meals he wasn't sure about. Cardio, resistance, diet, consistency. He made the academy.",
    name: "Police Academy Candidate, 22",
    meta: "40 lbs down in three months — 18 in the first",
    before: "/images/classic/before-mike.jpg",
    after: "/images/classic/after-david.jpg",
  },
];

export type Review = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

// Concept reviews carried over from the approved classic version.
export const REVIEWS: Review[] = [
  {
    quote:
      "Coach P tailors every session and takes recovery seriously. I'm in my 40s and honestly in the best shape of my life — age really is just a number.",
    name: "Isabella Nowak",
    role: "In-person Training",
    avatar: "/images/classic/avatar-isabella.jpg",
  },
  {
    quote:
      "The conditioning work Coach P puts together is no joke! I'm fitter than I was in my twenties. The nutrition guidance alongside training made everything click.",
    name: "Laurie",
    role: "In-person Training",
    avatar: "/images/classic/avatar-laurie.jpg",
  },
  {
    quote:
      "Competed in my first bodybuilding show after 18 months working together. The peak week prep was spot on — couldn't have done it without him.",
    name: "Michael Little",
    role: "In-person Training",
    avatar: "/images/classic/avatar-michael.jpg",
  },
  {
    quote:
      "I came in barely able to do a full push-up. Coach P built my confidence session by session, and now strength training is the best part of my week.",
    name: "Sofia Reyes",
    role: "Online Training",
    avatar: "/images/classic/avatar-isabella.jpg",
  },
  {
    quote:
      "The accountability is what sets Coach P apart. Weekly check-ins kept me consistent through a busy year, and the results speak for themselves.",
    name: "James Carter",
    role: "Online Training",
    avatar: "/images/classic/avatar-michael.jpg",
  },
];

export type PricingFeature = { label: string; highlight: boolean };

export type PricingPlan = {
  name: string;
  window: string;
  body: string;
  price: string; // "$95" or "On request"
  period: string; // "/session", "/month" or ""
  total?: string;
  featured: boolean;
  features: PricingFeature[];
};

export type PricingCategory = {
  key: "solo" | "group" | "build" | "online";
  label: string;
  note: string;
  /** Card background visual for this lane, shown under a heavy dark scrim. */
  image: string;
  plans: PricingPlan[];
};

const INCLUDED_1ON1: PricingFeature[] = [
  { label: "Measurements & weight tracking", highlight: false },
  { label: "Custom meal protocol", highlight: false },
  { label: "Fat, protein & carb targets per meal", highlight: false },
  { label: "Meal frequency set to your day", highlight: false },
];

const GROUP_FEATURES: PricingFeature[] = [
  { label: "Small group format", highlight: false },
  { label: "Form corrected every round", highlight: false },
  { label: "Progressive programming", highlight: false },
];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    key: "solo",
    label: "1-on-1",
    note: "All 1-on-1 packages are ten sessions and include full measurement, meal and macro protocols.",
    image: "/images/classic/svc-strength.jpg",
    plans: [
      {
        name: "First Light",
        window: "Before 7:00 AM",
        body: "The quiet hour. Limited slots, priced accordingly — you get the floor and my full attention before the day starts.",
        price: "$95",
        period: "/session",
        total: "10 sessions — $950",
        featured: false,
        features: INCLUDED_1ON1,
      },
      {
        name: "Midday",
        window: "8:00 AM – 12:00 PM",
        body: "The best value on the board. Same coaching, same protocol, in the calmest stretch of the day.",
        price: "$60",
        period: "/session",
        total: "10 sessions — $600",
        featured: true,
        features: INCLUDED_1ON1,
      },
      {
        name: "After Hours",
        window: "3:00 PM – 7:00 PM",
        body: "Straight from work to the floor. The most requested window, so book the slot you want early.",
        price: "$75",
        period: "/session",
        total: "10 sessions — $750",
        featured: false,
        features: INCLUDED_1ON1,
      },
    ],
  },
  {
    key: "group",
    label: "Group",
    note: "Group packages are ten sessions. Bring someone — accountability travels well.",
    image: "/images/classic/svc-conditioning.jpg",
    plans: [
      {
        name: "Morning Group",
        window: "8:00 AM – 12:00 PM",
        body: "Small group training with the same technique standard. Coached, not just supervised.",
        price: "$40",
        period: "/session",
        total: "10 sessions — $400",
        featured: false,
        features: GROUP_FEATURES,
      },
      {
        name: "Evening Group",
        window: "3:00 PM – 8:00 PM",
        body: "The after-work group. Higher energy, same attention to how you move.",
        price: "$50",
        period: "/session",
        total: "10 sessions — $500",
        featured: false,
        features: GROUP_FEATURES,
      },
      {
        name: "Kickboxing",
        window: "Scheduled blocks",
        body: "Striking mechanics, conditioning and footwork — drawn straight from the fight years.",
        price: "$60",
        period: "/session",
        total: "10 sessions — $600",
        featured: false,
        features: [
          { label: "Technique-led striking", highlight: false },
          { label: "Conditioning built in", highlight: false },
          { label: "All levels welcome", highlight: false },
        ],
      },
    ],
  },
  {
    key: "build",
    label: "Bodybuilding",
    note: "Bodybuilding packages run monthly rather than in ten-session blocks.",
    image: "/images/classic/Meet-coach.jpg",
    plans: [
      {
        name: "Full Build",
        window: "5 days per week",
        body: "Hands-on competition-level programming. Five days a week on the floor with me.",
        price: "$1,000",
        period: "/month",
        total: "Billed monthly",
        featured: false,
        features: [
          { label: "1-on-1 training, 5 days a week", highlight: true },
          { label: "Meal protocols", highlight: false },
          { label: "Supplement protocols (men & women)", highlight: false },
          { label: "Ongoing adjustments", highlight: false },
        ],
      },
      {
        name: "Guided Build",
        window: "Self-run + check-ins",
        body: "You run the workload, I set it and stay in it — including a leg day session to check your execution.",
        price: "$800",
        period: "/month",
        total: "Billed monthly",
        featured: false,
        features: [
          { label: "Programmed workload & protocols", highlight: false },
          { label: "Periodic check-ins", highlight: false },
          { label: "One coached session to verify form", highlight: false },
          { label: "Lifting & training support", highlight: false },
        ],
      },
    ],
  },
  {
    key: "online",
    label: "Online",
    note: "Pricing for online packages is available on request.",
    image: "/images/classic/cta-bg.jpg",
    plans: [
      {
        name: "Follow Along",
        window: "Self-paced",
        body: "Pre-recorded sessions you train alongside, with every movement demonstrated the way it gets coached in person.",
        price: "On request",
        period: "",
        total: "Ask about package pricing",
        featured: false,
        features: [
          { label: "Full video library", highlight: false },
          { label: "Structured programming", highlight: false },
          { label: "Train on your schedule", highlight: false },
        ],
      },
      {
        name: "Hold My Hand",
        window: "Live & guided",
        body: "Virtual training with me on the other end — real-time coaching, real-time corrections.",
        price: "On request",
        period: "",
        total: "Ask about package pricing",
        featured: false,
        features: [
          { label: "Live virtual sessions", highlight: true },
          { label: "Real-time form correction", highlight: false },
          { label: "Meal protocol included", highlight: false },
          { label: "Direct access between sessions", highlight: false },
        ],
      },
    ],
  },
];

// Grounded in the copy doc: session ledger, 30-day cycle, package inclusions.
export const FAQS = [
  {
    q: "How do the ten-session packages work?",
    a: "Every package is ten sessions. You book your slot, check in when you arrive, and the session comes off your balance — you can see exactly what's left at any time.",
  },
  {
    q: "Why do sessions expire after thirty days?",
    a: "Ten sessions stretched across three months isn't training — it's a membership. Thirty days keeps the work consistent enough for your body to answer. Unused sessions don't roll over, which is exactly why they get used.",
  },
  {
    q: "What's included with 1-on-1 packages?",
    a: "Measurements and weight tracking, plus a custom meal protocol with fat, protein and carb targets for every meal — set to how many meals a day you're eating.",
  },
  {
    q: "What's the difference between the online packages?",
    a: "Follow Along is pre-recorded sessions you train alongside, with every movement demonstrated the way it gets coached in person. Hold My Hand is live virtual training — real-time coaching, real-time corrections, with a meal protocol included.",
  },
  {
    q: "What's the kickboxing training like?",
    a: "Striking mechanics, conditioning and footwork, drawn straight from five to six years of competitive fighting. Technique-led, with all levels welcome.",
  },
  {
    q: "I'm just starting out, is that okay?",
    a: "Absolutely. A large share of my clients start as complete beginners. Every program is built around your current level, focusing on solid fundamentals and safe, progressive overload from day one.",
  },
];

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "The Standard", href: "#services" },
  { label: "Results", href: "#stories" },
  { label: "Packages", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
