type ProjectProps = {
  name: string;
  description: string;
  image: string;
  link: string;
};

export const projects: ProjectProps[] = [
  {
    name: "Subconscious Order",
    description:
      "An AI-powered camera tracks eye movements to determine food preferences and suggests relevant restaurants for ordering.",
    image: "/images/hungerstation-seo-image.png",
    link: "https://www.wundermanthompson.com/work/the-subconscious-order",
  },
  {
    name: "KitKat: Don't Blink",
    description:
      "The Don’t Blink Break became the world’s first AI powered staring contest.",
    image: "/images/kit-kat.webp",
    link: "https://www.allsetrent.com/",
  },
  {
    name: "Sherwin Williams: Speaking In Color",
    description:
      "Voice-activated AI color system that produces hues based on human inspiration",
    image: "/images/sic.webp",
    link: "https://www.wundermanthompson.com/work/speaking-in-color",
  },
  {
    name: "Saudi Telecom Company: Meet Sarha",
    description: "Meet Sarha – The World’s First Content-Creating Camel",
    image: "/images/sarha.webp",
    link: "https://www.wundermanthompson.com/work/meet-sarha",
  },
  {
    name: "Smallpox Simulator",
    description:
      "The tool, created for Meridian, maps how potential outbreaks might occur throughout the world.",
    image: "/images/smallpox-simulator.webp",
    link: "https://www.wundermanthompson.com/work/smallpox-simulator",
  },
];

// an array of award objects
type AwardProps = {
  name: string;
  description: string;
  client: string;
  link: string;
  issuedBy: string;
};

export const awards: AwardProps[] = [
  {
    name: "Creative B2B Lions Grand Prix",
    client: "Sherwin Williams",
    description: "Speaking In Color",
    link: "https://www.wundermanthompson.com/news/grand-prix-for-speaking-in-color",
    issuedBy: "Cannes Lions International Festival of Creativity",
  },

  {
    name: "Addy's Gold & Judges Choice",
    client: "Saudi Telecom Company",
    description: "Meet Sarha – The World’s First Content-Creating Camel",
    link: "https://www.wundermanthompson.com/work/meet-sarha",
    issuedBy: "American Advertising Federation",
  },
  {
    name: "The Dubai Lynx Grand Prix for Mobile",
    client: "Hungerstation",
    description: "The Subconscious Order",
    link: "https://www.wundermanthompson.com/work/the-subconscious-order",
    issuedBy: "The Dubai Lynx",
  },
  {
    name: "Silver Clio",
    client: "Meridian",
    description: "Smallpox Simulator",
    link: "https://www.wundermanthompson.com/news/two-gold-at-clio-health-for-wunderman-thompson-health",
    issuedBy: "Clios",
  },
];
