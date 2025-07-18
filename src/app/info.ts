type ProjectProps = {
  name: string;
  description: string;
  image: string;
  link: string;
};

export const projects: ProjectProps[] = [
  {
    name: "The SelfGallery",
    description: "A web application that curates art based on a user's DNA.",
    image: "/images/SelfGallery_app_view.png",
    link: "https://youtu.be/ViejjNMfUFE?si=Jkr7wPTYAGfYmbCQ&t=25",
  },
  {
    name: "The Voice of The Land - COP16 Riyadh",
    description:
      "RAG chat application showcased at the COP16 Riyadh conference",
    image: "/images/theland.jpg",
    link: "https://youtu.be/ae3BJHkqOtU?si=xXZKepRzvo7B2xqo",
  },
  {
    name: "Scenic Audio",
    description: "AI-Based App for the Visually Impaired.",
    image: "/images/Honda_SocialOGimage.png",
    link: "https://www.scenicaudio.info/",
  },
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
      "The Don't Blink Break became the world's first AI powered staring contest.",
    image: "/images/kit-kat.webp",
    link: "https://www.adsoftheworld.com/campaigns/the-world-s-first-ai-powered-staring-contest",
  },
  {
    name: "Sherwin Williams: Speaking In Color",
    description:
      "Voice-activated AI color system that produces hues based on human inspiration.",
    image: "/images/sic.webp",
    link: "https://www.wundermanthompson.com/work/speaking-in-color",
  },
  {
    name: "Saudi Telecom Company: Meet Sarha",
    description: "Meet Sarha - The World's First Content-Creating Camel.",
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
  {
    name: "A.Iran",
    description:
      "A.I. written stories about the future of woman's rights in Iran based on user actions.",
    image: "/images/airan.png",
    link: "https://www.wundermanthompson.com/work/a-iran",
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
    name: "Data Driven Transformation Award Winner",
    client: "Honda",
    description: "Honda Scenic Audio",
    link: "https://aaf.org/Public/Public/Events/Mosaic_Awards/Winners/2024/Mosaic-Awards-2024-Data-Transformation.aspx",
    issuedBy: "American Advertising Awards / Mosaic Awards",
  },
  {
    name: "Gold ADDY — Innovative Use of Interactive/Technology",
    client: "Hunger Station",
    description: "Subcincious Order",
    link: "https://americanadvertisingawards.com/awards/the-subconscious-order/",
    issuedBy: "American Advertising Awards",
  },
  {
    name: "Creative Commerce Lion Grand Prix",
    client: "Hunger Station",
    description: "Subcincious Order",
    link: "https://adage.com/article/special-report-cannes-lions/cannes-lions-2023-hungerstation-subconscious-order-wins-creative-commerce-grand-prix/2500906",
    issuedBy: "Cannes Lions International Festival of Creativity",
  },
  {
    name: "Creative B2B Lion Grand Prix",
    client: "Sherwin Williams",
    description: "Speaking In Color",
    link: "https://www.wundermanthompson.com/news/grand-prix-for-speaking-in-color",
    issuedBy: "Cannes Lions International Festival of Creativity",
  },

  {
    name: "Addy's Gold & Judges Choice",
    client: "Saudi Telecom Company",
    description: "Meet Sarha - The World's First Content-Creating Camel",
    link: "https://www.wundermanthompson.com/work/meet-sarha",
    issuedBy: "American Advertising Federation",
  },
  {
    name: "The Dubai Lynx Grand Prix for Mobile",
    client: "Hungerstation",
    description: "The Subconscious Order",
    link: "https://www.wundermanthompson.com/news/double-gp-at-dubai-lynx",
    issuedBy: "The Dubai Lynx",
  },
  {
    name: "Silver Clio",
    client: "Meridian",
    description: "Smallpox Simulator",
    link: "https://clios.com/health/winner/digital-mobile-social-media-craft-pharmaceutical/meridian-medical-technologies/the-smallpox-simulator-503404",
    issuedBy: "Clios",
  },
];

export type PrototypeProps = {
  name: string;
  description: string;
  tech: string;
  link?: string;
};

export const prototypes: PrototypeProps[] = [
  {
    name: "ART X",
    description:
      "Fetch images of art based on a user's mood, location, local news, and the weather.",
    tech: "React, Gemini API, Google Image API",
  },
  {
    name: "Banter AI",
    description:
      "Prototype designed to show the promise of real-time AI-assisted communication",
    tech: "React, Speechly, Open AI",
  },
  {
    name: "Beer Gust",
    description:
      "Web App that discounts beer at sporting events based on the weather and the user's seat location.",
    tech: "React, Firebase, OpenWeather API",
  },
  {
    name: "Music Match",
    description:
      "Web app that suggests makeup based on the user's musical tastes.",
    tech: "React, Firebase, Spotify API, Maybelline API",
  },
  {
    name: "Mood Mirror",
    description:
      "Web app that talks to the user about their mood, appearence and more.",
    tech: "React, WebCam API, TensorFlowJS, Face API",
  },
  {
    name: "Bully Chat",
    description:
      "Web app listens to the user's video game chat and detects if they are being bullied.",
    tech: "React, Web Speech API, TensorFlowJS",
  },
  {
    name: "Beer Scan",
    description:
      "Web app that detects various beverages using the users webcam and displays information about them.",
    tech: "React, WebCam API, TensorFlowJS",
  },
  {
    name: "Beautiful Spam",
    description:
      "Web app that fetches a users spam emails and creates Haiku poems from their content.",
    tech: "React, Microsoft Graph API",
  },
  {
    name: "Sandwich Love Letter",
    description:
      "Web app that uses AI to write a love letter to the user's favorite sandwich.",
    tech: "React, OpenAI",
  },
];

type BuildProps = {
  title: string;
  description: string;
};

export const build: BuildProps[] = [
  {
    title: "AI-Powered Custom Chatbots",
    description:
      "Conversational AI tailored to your needs, including advanced options like Retrieval-Augmented Generation (RAG) chatbots that can pull information from documents (like PDFs) and knowledge bases for smarter, context-aware responses.",
  },
  {
    title: "Avatar Chatbots",
    description:
      "AI-driven avatar chatbots that combine the power of Retrieval-Augmented Generation (RAG) with realistic, interactive avatars to create dynamic, personalized conversational agents.",
  },
  {
    title: "Web Development",
    description:
      "Beautifully designed, mobile-friendly websites and scalable, interactive applications crafted with modern frameworks like React and Next.js.",
  },
  {
    title: "AI-Enhanced User Experiences",
    description:
      "From intelligent, context-aware search tools to personalized features, I create AI-driven solutions that elevate how users interact with your platform.",
  },
  {
    title: "Data Dashboards",
    description:
      "Intuitive, real-time dashboards to visualize and track your data effectively.",
  },
  {
    title: "API Integrations",
    description:
      "Seamlessly connect and integrate third-party APIs to enhance your platform’s functionality.",
  },

  {
    title: "Prototype Development",
    description:
      "Quickly transform ideas into interactive prototypes that can be tested, iterated on, and used in pitches or sales presentations to showcase your vision effectively.",
  },
];
