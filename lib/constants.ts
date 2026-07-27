import type {
  Article,
  DoDontItem,
  FaqItem,
  NavLink,
  PortfolioProject,
  PrincipleItem,
  ProcessDetailStep,
  RecognitionItem,
  Service,
  SocialLink,
  StatItem,
  TeamMember,
  Testimonial,
  ValueWord,
} from "@/types";

export const siteConfig = {
  name: "Kommon Canvas",
  shortName: "KC",
  tagline: "Strategic branding & packaging design to make your brand a household name.",
  description:
    "Kommon Canvas is an independent creative studio partnering with founders on brand identity, packaging, and digital design that customers love, trust, and remember.",
  url: "https://www.kommoncanvas.com",
  email: "hello@kommoncanvas.com",
  phone: "+1 (415) 555-0132",
  location: "San Francisco, CA",
  founded: "2016",
} as const;

export const contactHref = "/contact-us";

export const navLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: contactHref },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "X", href: "https://x.com" },
];

export const services: Service[] = [
  {
    id: "brand-identity",
    index: "01",
    title: "Brand Identity",
    tagline: "Make your brand unforgettable.",
    theme: "gold",
    description:
      "We define who you are, then help your customers fall for it — naming, logo, voice, and a visual language built to hold up at any scale.",
  },
  {
    id: "packaging-design",
    index: "02",
    title: "Packaging Design",
    tagline: "Turn your product into a brand magnet.",
    theme: "sunset",
    description:
      "Shelf-ready design systems that make a product impossible to scroll past, in-store or online.",
  },
  {
    id: "creative-partnerships",
    index: "03",
    title: "Creative Partnership Plans",
    tagline: "Design support that grows with you.",
    theme: "slate",
    description:
      "Ongoing creative direction for growing brands that need a design team without hiring one in-house.",
  },
];

export const processDetailSteps: ProcessDetailStep[] = [
  {
    id: "pd-01",
    number: "01",
    title: "Research & Discovery",
    theme: "slate",
    paragraphs: [
      "This stage is about understanding the market, the audience, and the opportunity — through category research, competitor analysis, and stakeholder interviews.",
      "We surface the brand's current position, audience perceptions, and where the real category white space is hiding.",
    ],
  },
  {
    id: "pd-02",
    number: "02",
    title: "Strategic Blueprint",
    theme: "violet",
    paragraphs: [
      "This stage defines the brand strategy. We start by setting clear goals and mapping the audience so every choice has a target.",
      "From there we define the mission, vision, purpose, and core values that shape the brand's direction.",
      "Finally, we architect the brand narrative, tone of voice, and messaging — a foundation the brand can communicate from consistently and with confidence.",
    ],
  },
  {
    id: "pd-03",
    number: "03",
    title: "Creative Exploration",
    theme: "ember",
    paragraphs: [
      "This is where visual exploration begins. Through moodboards and creative directions, we translate strategy into early visual territory.",
      "We explore logo concepts, typography, color, texture, and pattern — testing what best captures the brand's intent and emotion.",
    ],
  },
  {
    id: "pd-04",
    number: "04",
    title: "Visual Identity Design",
    theme: "mint",
    paragraphs: [
      "At this stage we develop multiple directions grounded in the defined strategy, refining the logo system, typography, and color palette.",
      "These elements extend into brand applications, ensuring a cohesive and enduring identity system that holds up across every touchpoint.",
    ],
  },
  {
    id: "pd-05",
    number: "05",
    title: "Packaging Design",
    theme: "gold",
    paragraphs: [
      "We start by defining the visual hierarchy and structural framework for the packaging, guided by shelf-impact assessment for standout appeal.",
      "From there we develop the master packaging design, extending it across all variants and sizes, refining every detail for production-ready artwork that performs on shelf.",
    ],
  },
  {
    id: "pd-06",
    number: "06",
    title: "Guidelines, Assets & Partnership",
    theme: "sunset",
    paragraphs: [
      "This stage ensures the brand is ready to launch, scale, and stay consistent. We create comprehensive brand guidelines covering look, feel, and function.",
      "A complete asset package — logos, fonts, icons, and templates — plus optional social and POS materials to keep execution consistent.",
      "Finally, through an ongoing Creative Partnership Plan, we maintain and evolve the brand as it grows, ensuring quality and consistency over time.",
    ],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  { id: "prj-01", slug: "zephyr-cola", title: "Zephyr Cola", category: "Food & Beverage", theme: "ember" },
  { id: "prj-02", slug: "harvest-grain-co", title: "Harvest Grain Co.", category: "Food & Beverage", theme: "gold" },
  { id: "prj-03", slug: "kettle-and-bloom", title: "Kettle & Bloom", category: "Food & Beverage", theme: "sunset" },
  { id: "prj-04", slug: "golden-hive-honey", title: "Golden Hive Honey", category: "Food & Beverage", theme: "gold" },
  { id: "prj-05", slug: "orchard-fizz", title: "Orchard Fizz", category: "Food & Beverage", theme: "mint" },
  { id: "prj-06", slug: "velvet-lash-studio", title: "Velvet Lash Studio", category: "Beauty & Wellness", theme: "violet" },
  { id: "prj-07", slug: "bloom-and-balm", title: "Bloom & Balm", category: "Beauty & Wellness", theme: "lavender" },
  { id: "prj-08", slug: "aura-skincare", title: "Aura Skincare", category: "Beauty & Wellness", theme: "mint" },
  { id: "prj-09", slug: "petal-cosmetics", title: "Petal Cosmetics", category: "Beauty & Wellness", theme: "sunset" },
  { id: "prj-10", slug: "solace-spa-retreats", title: "Solace Spa Retreats", category: "Beauty & Wellness", theme: "slate" },
  { id: "prj-11", slug: "hearth-and-home-hotels", title: "Hearth & Home Hotels", category: "Hospitality", theme: "ember" },
  { id: "prj-12", slug: "wanderers-table", title: "The Wanderer's Table", category: "Hospitality", theme: "gold" },
  { id: "prj-13", slug: "nomad-stay-co", title: "Nomad Stay Co.", category: "Hospitality", theme: "slate" },
  { id: "prj-14", slug: "lineage-hotels", title: "Lineage Hotels", category: "Hospitality", theme: "violet" },
  { id: "prj-15", slug: "amber-and-oak-inn", title: "Amber & Oak Inn", category: "Hospitality", theme: "sunset" },
  { id: "prj-16", slug: "iris-and-thread", title: "Iris & Thread", category: "Lifestyle & Apparel", theme: "violet" },
  { id: "prj-17", slug: "northbound-supply-co", title: "Northbound Supply Co.", category: "Lifestyle & Apparel", theme: "slate" },
  { id: "prj-18", slug: "drip-studio", title: "Drip Studio", category: "Lifestyle & Apparel", theme: "ember" },
  { id: "prj-19", slug: "sanctum-home-goods", title: "Sanctum Home Goods", category: "Lifestyle & Apparel", theme: "gold" },
  { id: "prj-20", slug: "cedar-and-sable", title: "Cedar & Sable", category: "Lifestyle & Apparel", theme: "mint" },
];

export const workCategories = [
  "All",
  "Beauty & Wellness",
  "Food & Beverage",
  "Hospitality",
  "Lifestyle & Apparel",
] as const;

export const stats: StatItem[] = [
  { id: "s-01", value: 75, suffix: "+", label: "Branding Impacts", icon: "feather" },
  { id: "s-02", value: 30, suffix: "+", label: "Cities Reached", icon: "map-pin" },
  { id: "s-03", value: 50, suffix: "+", label: "Flagship Clients", icon: "award" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    reaction: "Extraordinary work!",
    quote:
      "Kommon Canvas gave our brand a point of view we didn't know we were missing. The impact showed up in sales within a quarter.",
    name: "Rahul Menon",
    role: "Founder, Sway Drinks",
    theme: "mint",
  },
  {
    id: "t-02",
    reaction: "Super happy, super proud!",
    quote:
      "Every deliverable felt considered. They pushed back on our first instincts and the work is better for it.",
    name: "Ananya Rao",
    role: "Co-founder, Combi Co.",
    theme: "sunset",
  },
  {
    id: "t-03",
    reaction: "Super smooth partnership.",
    quote:
      "From naming to packaging, everything shipped on time and felt like it came from a single hand.",
    name: "Devraj Singh",
    role: "Founder, Loam",
    theme: "violet",
  },
];

export const clientNames: string[] = [
  "Whiskerly",
  "Eyemart",
  "Growable",
  "Aoba",
  "Kazee",
  "Northline",
  "Litefly",
  "Pippo",
  "Amberly",
  "Byteforge",
  "Nosh",
  "Fellow",
  "Trailmix",
  "97 Skin",
  "Starlis",
  "Rennova",
  "Idyllic",
  "Charno",
  "7 Tribute",
  "Meridian",
  "Verdant",
  "Hearthly",
  "Orbital",
  "Fablehaus",
];

export const principles: PrincipleItem[] = [
  {
    id: "p-01",
    letter: "C",
    title: "Clarity",
    description: "Every decision traces back to a single, defensible idea.",
  },
  {
    id: "p-02",
    letter: "C",
    title: "Craft",
    description: "Senior hands on every deliverable — no junior hand-offs.",
  },
  {
    id: "p-03",
    letter: "C",
    title: "Candor",
    description: "We say the honest thing, even when it isn't the easy one.",
  },
  {
    id: "p-04",
    letter: "C",
    title: "Care",
    description: "Systems built to outlast the engagement that produced them.",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "f-01",
    question: "What kinds of clients do you work with?",
    answer:
      "We partner with founders and marketing leaders at ambitious, growth-stage companies — typically Series A and beyond, or established brands undertaking a meaningful repositioning.",
  },
  {
    id: "f-02",
    question: "How long does a typical engagement take?",
    answer:
      "A brand identity project runs 6–10 weeks. Packaging and digital design engagements range 8–16 weeks depending on scope. We'll give you a precise timeline after discovery.",
  },
  {
    id: "f-03",
    question: "Do you work with in-house teams?",
    answer:
      "Yes — many of our engagements embed alongside internal marketing, product, and operations teams. We hand off clean documentation and design systems, not just files.",
  },
  {
    id: "f-04",
    question: "How is a project scoped and priced?",
    answer:
      "Projects are quoted as fixed-fee engagements based on complexity, not hourly rates — this keeps incentives aligned on outcomes, not hours logged.",
  },
  {
    id: "f-05",
    question: "Can we start with something smaller?",
    answer:
      "Absolutely. Many relationships start with a focused sprint — a brand audit, a single SKU, or a landing page — before scaling into a larger engagement.",
  },
  {
    id: "f-06",
    question: "How do I get a project started?",
    answer: "Book a call or send us a note through the contact form below — we reply within one business day.",
  },
];

export const valueWords: ValueWord[] = [
  { id: "v-01", word: "Clarity" },
  { id: "v-02", word: "Craft" },
  { id: "v-03", word: "Candor" },
  { id: "v-04", word: "Care" },
  { id: "v-05", word: "Curiosity" },
  { id: "v-06", word: "Consistency" },
];

export const dontList: DoDontItem[] = [
  {
    id: "dont-01",
    title: "Create logos in isolation",
    description: "A logo without a strategy behind it is just decoration, not design.",
  },
  {
    id: "dont-02",
    title: "Chase trends",
    description: "Design trends fade fast — we build systems meant to hold up for years.",
  },
  {
    id: "dont-03",
    title: "Just hand over files",
    description: "Every deliverable comes with the reasoning and documentation behind it.",
  },
  {
    id: "dont-04",
    title: "Cut corners in production",
    description: "We stay involved through manufacturing so nothing gets lost in translation.",
  },
  {
    id: "dont-05",
    title: "Treat projects as transactions",
    description: "We build long-term partnerships, not one-off deliverables.",
  },
];

export const doList: DoDontItem[] = [
  {
    id: "do-01",
    title: "Build brands from the ground up",
    description: "From positioning to naming and identity, every layer is designed together.",
  },
  {
    id: "do-02",
    title: "Design with strategy, not guesswork",
    description: "Every choice starts with research, discovery, and a clear strategic brief.",
  },
  {
    id: "do-03",
    title: "Create packaging that performs",
    description: "Systems built to stand out on shelf and hold up in production.",
  },
  {
    id: "do-04",
    title: "Deliver end-to-end",
    description: "Strategy, design, guidelines, and production support — one accountable team.",
  },
  {
    id: "do-05",
    title: "Bring clarity",
    description: "Every decision is explained, so you understand the 'why' behind the work.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "team-00",
    name: "Meera Kapoor",
    role: "Founder & Creative Director",
    theme: "gold",
    isFounder: true,
    bio: "Meera founded Kommon Canvas after a decade leading brand and packaging teams across consumer goods. Her studio is built around one belief: design earns trust when it's honest, considered, and built to last.",
  },
  { id: "team-01", name: "Arjun Bhatia", role: "Strategy & Marketing Lead", theme: "slate" },
  { id: "team-02", name: "Naina Kohli", role: "Lead Brand Designer", theme: "sunset" },
  { id: "team-03", name: "Kabir Sethi", role: "Packaging Designer", theme: "mint" },
  { id: "team-04", name: "Zara Malhotra", role: "Illustrator & Motion Designer", theme: "violet" },
  { id: "team-05", name: "Ishaan Verma", role: "Product & Digital Designer", theme: "ember" },
  { id: "team-06", name: "Riya Chopra", role: "Client & Project Manager", theme: "lavender" },
];

export const recognitions: RecognitionItem[] = [
  {
    id: "rec-01",
    title: "Packaging of the World loves us",
    description: "Multiple projects featured for shelf-ready craft and material innovation.",
    theme: "ember",
    background: "ink",
    imagePosition: "left",
  },
  {
    id: "rec-02",
    title: "Behance loves us",
    description: "Featured and curated projects highlighted for design excellence.",
    theme: "gold",
    background: "lavender",
    imagePosition: "left",
  },
  {
    id: "rec-03",
    title: "World Brand Design loves us",
    description: "Recognized for strategy-led, impactful branding work across categories.",
    theme: "mint",
    background: "ink",
    imagePosition: "right",
  },
];

export const articles: Article[] = [
  {
    id: "a-01",
    slug: "combi-co-funding",
    title: "Behind the Combi Co. rebrand and its $10M raise",
    excerpt:
      "Inside our packaging and identity work for Combi Co., and how design earned its seat at the fundraising table.",
    category: "Case Study",
    date: "Jun 2026",
    theme: "mint",
  },
  {
    id: "a-02",
    slug: "millet-matters-launch",
    title: "How we brought Millet Matters to national retail shelves",
    excerpt:
      "A packaging system built to travel from farmers' markets to national grocery chains without losing its voice.",
    category: "Packaging",
    date: "May 2026",
    theme: "sunset",
  },
  {
    id: "a-03",
    slug: "studio-notes-craft",
    title: "Notes from the studio: what makes packaging shelf-ready",
    excerpt:
      "Five principles we return to on every packaging project, drawn from a decade of shelf tests and client launches.",
    category: "Perspective",
    date: "Apr 2026",
    theme: "slate",
  },
];
