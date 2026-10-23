export type Offering = {
  slug: string;
  title: string;
  text: string;
  points: string[];
  /** Existing image used until a file named after the slug is added to public/images/offerings/ */
  fallback?: string;
};

export type OfferingGroup = {
  id: string;
  title: string;
  intro: string;
  columns: 2 | 3 | 4;
  items: Offering[];
};

export const OFFERING_GROUPS: OfferingGroup[] = [
  {
    id: "ai",
    title: "AI agents that work for your business",
    intro: "Our core work. We design, build and launch AI agents that talk to your customers, see products and recognise people.",
    columns: 4,
    items: [
      {
        slug: "virtual-try-on",
        title: "Virtual try-on",
        text: "Shoppers see clothes, glasses or accessories on themselves before they buy, right on your product page.",
        points: ["Built into your online shop", "Works with your own catalogue"],
      },
      {
        slug: "ai-voice-receptionist",
        title: "AI voice receptionist",
        text: "Answers calls day and night, books appointments, handles common questions and passes tricky calls to your team.",
        points: ["Books into your calendar", "Hands over to a person when needed"],
      },
      {
        slug: "rag-chatbot",
        title: "A chatbot that knows your business",
        text: "An assistant trained on your documents, website and FAQs. It answers from your material and shows its sources.",
        points: ["Answers grounded in your documents", "Works in English and Bengali"],
        fallback: "/images/works/legal_support_composite.jpg",
      },
      {
        slug: "face-recognition",
        title: "Face recognition",
        text: "Recognise people for attendance, secure access or customer check-in, with consent and data protection in mind.",
        points: ["Attendance and access control", "Works on photos and live cameras"],
      },
    ],
  },
  {
    id: "web",
    title: "Websites and online shops, end to end",
    intro: "From a simple business site to a complete shop that takes payments, built and handed over by one team.",
    columns: 3,
    items: [
      {
        slug: "websites",
        title: "Business websites",
        text: "A fast, clear website that shows what you do and makes it easy for the right people to get in touch.",
        points: ["Designed around your customers", "Quick to load and easy to find on Google"],
        fallback: "/images/works/edumentor_homepage.png",
      },
      {
        slug: "ecommerce",
        title: "Complete online shops",
        text: "Catalogue, cart, checkout and order management. One team builds the whole shop, so nothing falls between the gaps.",
        points: ["Stock and orders in one admin", "Built for shopping on a phone"],
        fallback: "/images/works/aura_ecommerce_landing.jpg",
      },
      {
        slug: "payments",
        title: "Payment integration",
        text: "Secure card, wallet and local payment options connected to your shop or app, then tested from first click to receipt.",
        points: ["Cards and mobile wallets", "Refunds and order status handled"],
      },
    ],
  },
  {
    id: "gis",
    title: "Maps and satellite intelligence",
    intro: "We turn satellite, aerial and LiDAR data into accurate maps and repeatable analysis for forestry, planning, infrastructure, agriculture and risk teams.",
    columns: 3,
    items: [
      {
        slug: "gis-mapping",
        title: "Maps and spatial analysis",
        text: "Digitising, georeferencing, routes, buffers and overlays, delivered as clean map files and print-ready PDFs.",
        points: ["GeoJSON, shapefile, GeoPackage, GeoTIFF", "Method and checks documented"],
        fallback: "/images/works/berlin_street_network.jpg",
      },
      {
        slug: "satellite-analysis",
        title: "Satellite image analysis",
        text: "Change detection, land cover and flood mapping from Sentinel and Landsat imagery.",
        points: ["Forest-loss and land-use change", "Flood susceptibility maps"],
        fallback: "/images/works/taif_flood_probability.jpg",
      },
      {
        slug: "lidar-3d",
        title: "LiDAR and 3D models",
        text: "Point clouds turned into terrain, canopy height, individual trees and rooftop solar estimates.",
        points: ["Tree and building extraction", "Solar potential per roof"],
        fallback: "/images/works/lidar_rooftop_solar_pv.jpg",
      },
      {
        slug: "imagery-ai",
        title: "AI that reads imagery",
        text: "Models that find and count things in photos and aerial images, such as tree crowns or crop disease.",
        points: ["Object detection at scale", "Over 100,000 trees mapped at DLR"],
        fallback: "/images/works/tree_detection_5610.jpg",
      },
      {
        slug: "web-maps",
        title: "Interactive maps and dashboards",
        text: "Web maps and dashboards your team can open in a browser, fed by automated data pipelines.",
        points: ["Leaflet, Streamlit and FastAPI", "Updates on a schedule"],
      },
      {
        slug: "data-extraction",
        title: "Data extraction and automation",
        text: "We collect data from websites and PDFs and deliver it as clean Excel or CSV tables, with the workflow automated.",
        points: ["Web scraping and PDF extraction", "Ready-to-use tables and maps"],
      },
    ],
  },
];
