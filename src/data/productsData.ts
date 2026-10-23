export interface ProductSpec {
  name: string;
  value: string;
}

export interface StoryRow {
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ProductData {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  headlinePrimary: string;
  headlineSecondary: string;
  tagline: string;
  summary: string;
  detailedDescription: string;
  liveBadge: string;
  metricLabel: string;
  metricValue: string;
  image: string;
  secondaryImage?: string;
  highlights: string[];
  specs: ProductSpec[];
  architecture: {
    frontend: string;
    backend: string;
    modelsOrSensors: string;
    deployment: string;
  };
  deliverables: string[];
  outcomes: {
    primary: string;
    secondary: string;
  };
  demoCta: string;
  storyRows: StoryRow[];
}

export const PRODUCTS_CATALOG: ProductData[] = [
  {
    id: "virtual-try-on",
    slug: "virtual-try-on",
    name: "Virtual Try-On System",
    shortName: "Virtual Try-On",
    category: "Vision AI & AR Commerce",
    headlinePrimary: "Crafted for Fit.",
    headlineSecondary: "Designed for Conversion.",
    tagline: "Shoppers see clothes, glasses, or accessories on themselves before they buy—right on your product page.",
    summary: "Real-time 3D garment warping, pose estimation, and cloth drape simulation integrated seamlessly into custom web and headless Shopify stores.",
    detailedDescription: "Our virtual try-on lets customers see apparel on themselves in real time. Running in the browser with a GPU service behind it, it gives shoppers a smooth fitting experience that helps them choose with confidence.",
    liveBadge: "Phone and laptop cameras",
    metricLabel: "Works on",
    metricValue: "Phone & laptop",
    image: "/images/offerings/virtual-try-on.webp",
    secondaryImage: "/images/products/virtual-try-on/lifestyle.jpg",
    highlights: [
      "Real-time fitting in the browser, backed by a GPU service",
      "Automatic cloth drape & wrinkle preservation",
      "Body tracking without a calibration step",
      "Seamless embed into Shopify, Next.js, WooCommerce & custom sites",
    ],
    specs: [
      { name: "Runs on", value: "Browser, with a GPU service for fitting" },
      { name: "Camera Compatibility", value: "Mobile iOS/Android & Desktop Webcams" },
      { name: "Catalogue Sync", value: "Automated 2D-to-3D Garment Preprocessing" },
      { name: "Supported Apparel", value: "Blazers, Jackets, Shirts, Eyewear, Hats" },
    ],
    architecture: {
      frontend: "Next.js 16 + WebGL Canvas + WebRTC Video Stream",
      backend: "Python FastAPI + PyTorch TensorRT Container",
      modelsOrSensors: "HRNet Pose Estimation + DeepFashion Warping VDM",
      deployment: "AWS ECS GPU Cluster / Cloudflare Worker Edge Gateway",
    },
    deliverables: [
      "100% full source code for client embed and backend inference",
      "Dockerized container for GPU cloud deployment",
      "Automated catalogue ingestion script for new clothing items",
      "White-label UI components with brand color tokens",
    ],
    outcomes: {
      primary: "Helps shoppers choose with more confidence",
      secondary: "Aims to cut returns caused by sizing doubts",
    },
    demoCta: "Book a Virtual Try-On Walkthrough",
    storyRows: [
      {
        number: "01",
        title: "Engineered for Pure Performance.",
        description:
          "Every detail is precisely crafted to give a smooth, real-time fitting experience on phone and laptop cameras.",
        image: "/images/products/virtual-try-on/macro.jpg",
        tag: "WebGL & Keypoints",
      },
      {
        number: "02",
        title: "Technology That Elevates Every Garment.",
        description:
          "Clothing is fitted to the shopper's pose and keeps its natural folds and drape as they move.",
        image: "/images/products/virtual-try-on/exploded.jpg",
        tag: "Realistic fitting",
      },
      {
        number: "03",
        title: "Minimal Design. Maximum Impact.",
        description:
          "Seamlessly embeds as an interactive fitting mirror into your digital storefront or physical boutique kiosk.",
        image: "/images/products/virtual-try-on/lifestyle.jpg",
        tag: "Turnkey Storefront Embed",
      },
    ],
  },
  {
    id: "ai-voice-receptionist",
    slug: "ai-voice-receptionist",
    name: "AI Voice Agent for Inbound Calls",
    shortName: "AI Voice Agent",
    category: "Voice AI & Inbound Telephony",
    headlinePrimary: "AI Voice Agent for Inbound Calls.",
    headlineSecondary: "Built So No Call Goes Unanswered.",
    tagline: "Automate responses to inbound calls, manage customer inquiries 24/7, schedule appointments, qualify leads, and route calls with contextual human handoff.",
    summary: "Ultra-low-latency bidirectional conversational voice agent software connected to telecom carriers, live calendars, and CRM systems with 100% full source code ownership.",
    detailedDescription: "Built for healthcare, real estate, professional services, and high-volume inbound businesses, this system replaces traditional IVR phone trees with natural, human-like voice conversations. It listens, reasons, qualifies leads, checks live calendar slot availability, schedules appointments, and transfers high-priority calls to human staff with complete conversation transcripts and caller sentiment context.",
    liveBadge: "Answers calls 24/7",
    metricLabel: "Answers calls",
    metricValue: "Day and night",
    image: "/images/products/ai-voice-receptionist/hero_natural.jpg",
    highlights: [
      "Books meetings automatically directly into Google Calendar & Outlook",
      "Natural, human-like phone conversations",
      "Contextual warm handoff to human agents with full briefing",
      "Automated lead qualification & real-time CRM synchronization",
      "Answers calls 24/7 in the languages your callers use",
      "Emotion recognition and real-time caller sentiment analytics",
    ],
    specs: [
      { name: "Telephony Providers", value: "Twilio, Telnyx, Plivo, FreePBX, Asterisk SIP" },
      { name: "Speech Recognition", value: "Deepgram Nova-2 / Whisper (streaming speech recognition)" },
      { name: "Speech Synthesis", value: "Cartesia Sonic / ElevenLabs / OpenAI text-to-speech" },
      { name: "Calendar & CRM Sync", value: "Google Calendar, Outlook, Calendly, HubSpot, Salesforce" },
      { name: "Multilingual Support", value: "Multiple languages with regional accent adaptation" },
      { name: "Handoff Protocol", value: "Warm SIP transfer with live caller briefing & transcript" },
    ],
    architecture: {
      frontend: "Live Telephony WebRTC Stream & Supervisor Web Audio Dashboard",
      backend: "FastAPI Async WebSockets + Redis Pub/Sub + Celery Workers",
      modelsOrSensors: "Streaming ASR + Llama 3.3 / Claude 3.5 Sonnet + Neural TTS",
      deployment: "Kubernetes Cluster with Low-Jitter Audio Routing & SIP Trunk",
    },
    deliverables: [
      "100% full source code for telephony audio pipeline & web dashboard",
      "Production Twilio / SIP audio pipeline & business phone number setup",
      "Bi-directional Calendar (Google/Outlook) and CRM webhook integrations",
      "Caller intent analytics, emotion tracking, and transcript database",
      "Warm human escalation routing and fall-back logic",
      "Turnkey deployment with zero ongoing per-minute studio markup",
    ],
    outcomes: {
      primary: "Never miss an inbound call during peak volume or after hours",
      secondary: "Automate routine scheduling and inquiries so human staff focus on high-value clients",
    },
    demoCta: "Schedule a Live Voice Call Demo",
    storyRows: [
      {
        number: "01",
        title: "Built for natural, real-time conversation.",
        description:
          "Streaming speech-to-text, turn-taking detection and natural voice synthesis keep phone conversations flowing, without awkward pauses.",
        image: "/images/products/ai-voice-receptionist/macro_natural.jpg",
        tag: "Streaming ASR & Turn-Taking",
      },
      {
        number: "02",
        title: "Telephony That Elevates Every Interaction.",
        description:
          "Native SIP trunking, Twilio webhooks, and asynchronous WebSockets connect directly to your business phone line, with multi-accent support, emotion recognition, and strict conversational guardrails.",
        image: "/images/products/ai-voice-receptionist/call_interaction_natural.jpg",
        tag: "Natural Phone Interactions",
      },
      {
        number: "03",
        title: "Executive Workplace Integration & CRM Dispatch.",
        description:
          "Integrates seamlessly into modern clinics, consultancies, and commercial offices, syncing bookings directly to Google Calendar and dispatching caller briefs into HubSpot and Salesforce.",
        image: "/images/products/ai-voice-receptionist/workplace_natural.jpg",
        tag: "Workplace & CRM Integration",
      },
    ],
  },
  {
    id: "business-knowledge-assistant",
    slug: "business-knowledge-assistant",
    name: "Business Knowledge Assistant",
    shortName: "Knowledge Assistant",
    category: "Enterprise RAG & Documents",
    headlinePrimary: "Built for Precision.",
    headlineSecondary: "Answers You Can Check.",
    tagline: "An internal and customer assistant trained on your contracts, technical manuals, and FAQs. Strictly answers with page citations.",
    summary: "Private enterprise Retrieval-Augmented Generation (RAG) system with hybrid dense-sparse vector indexing, citation checks, and bilingual capability.",
    detailedDescription: "Built for companies handling complex regulatory statutes, vendor agreements, and technical documentation. Unlike generic chatbots, our Knowledge Assistant evaluates text relevance, validates citations against original page PDFs, and refuses to fabricate answers. It can run entirely on on-premises private hardware for strict confidentiality.",
    liveBadge: "Answers cite their sources",
    metricLabel: "Every answer comes with",
    metricValue: "A source",
    image: "/images/products/business-knowledge-assistant/hero.jpg",
    highlights: [
      "Hybrid vector + BM25 keyword retrieval for exact term precision",
      "Strict citation references highlighting exact source pages",
      "Bilingual comprehension in Bengali and English",
      "Air-gapped on-premises or private cloud deployment options",
    ],
    specs: [
      { name: "Document capacity", value: "Large document libraries" },
      { name: "Vector Database", value: "Qdrant / pgvector / Milvus" },
      { name: "Embedding Model", value: "BGE-Large / text-embedding-3-large" },
      { name: "Audit Trail", value: "Full query logging and confidence scores" },
    ],
    architecture: {
      frontend: "Next.js Responsive Document Chat UI with PDF Viewer Overlay",
      backend: "FastAPI + LangGraph Agentic Pipeline",
      modelsOrSensors: "Hybrid Search Reranker (Cohere) + Claude 3.5 / Llama 3.3",
      deployment: "Docker Compose / AWS ECS Private VPC",
    },
    deliverables: [
      "Complete searchable document ingestion and chunking pipeline",
      "Custom citation viewer web interface",
      "Automated document sync from Google Drive, Dropbox, or S3",
      "Security compliance documentation for GDPR and internal audits",
    ],
    outcomes: {
      primary: "Staff find answers faster, with a source they can check for every one",
      secondary: "Eliminated client compliance risks from hallucinated policies",
    },
    demoCta: "Request Enterprise RAG Walkthrough",
    storyRows: [
      {
        number: "01",
        title: "Engineered for Factual Integrity.",
        description:
          "Every generated answer links directly to verified source document pages, statutes, and contracts with highlighted PDF bounding boxes.",
        image: "/images/products/business-knowledge-assistant/macro.jpg",
        tag: "Auditable Citations",
      },
      {
        number: "02",
        title: "Hybrid Search That Elevates Retrieval.",
        description:
          "Combines dense neural semantic embeddings with BM25 exact keyword matching, retrieving the exact clause even across large document libraries.",
        image: "/images/products/business-knowledge-assistant/exploded.jpg",
        tag: "Dense-Sparse Retrieval",
      },
      {
        number: "03",
        title: "Air-Gapped Security. Maximum Compliance.",
        description:
          "Empowers corporate attorneys and executives with private on-premises or sovereign VPC deployments that never train external third-party models.",
        image: "/images/products/business-knowledge-assistant/lifestyle.jpg",
        tag: "Private Air-Gapped VPC",
      },
    ],
  },
  {
    id: "face-recognition",
    slug: "face-recognition",
    name: "Face Recognition & Access Control",
    shortName: "Face Recognition",
    category: "Edge Biometrics & Access",
    headlinePrimary: "Instant Edge Verification.",
    headlineSecondary: "Engineered for Privacy.",
    tagline: "Touchless attendance, secure door access, and verified customer check-in engineered with strict consent and GDPR data privacy.",
    summary: "Edge-computed biometric verification with 3D anti-spoofing liveness, encrypted vector representations, and fast matching.",
    detailedDescription: "Our biometric security system runs lightweight deep learning models directly on edge devices (NVIDIA Jetson, Intel NUC, or local mini-servers). Faces are converted into irreversible 512-dimensional encrypted embeddings, ensuring raw facial photos are never stored. Ideal for secure facilities, gym check-ins, and automated staff attendance.",
    liveBadge: "Built around consent",
    metricLabel: "Designed around",
    metricValue: "Consent",
    image: "/images/products/face-recognition/hero.jpg",
    highlights: [
      "3D liveness anti-spoofing to prevent photo and screen bypass",
      "On-premises inference, so recognition can run without the cloud",
      "Encrypted 512-d mathematical vector storage for full privacy",
      "Seamless integration with relay locks, turnstiles, and HR systems",
    ],
    specs: [
      { name: "Where it runs", value: "On-site hardware at the entrance" },
      { name: "Liveness Defense", value: "Infrared + RGB Depth Anti-Spoof" },
      { name: "Database Scale", value: "Supports up to 50,000 enrolled profiles" },
      { name: "Edge Hardware", value: "Jetson Orin, Raspberry Pi 5, or x86 mini-PC" }
    ],
    architecture: {
      frontend: "Staff Management Dashboard & Edge Camera Display",
      backend: "Go / C++ High-Speed Edge Daemon + FastAPI Admin",
      modelsOrSensors: "ArcFace InsightFace + MiniFASNet Liveness + RTSP Stream",
      deployment: "Local Edge Device with Encrypted SQLite / pgvector Sync",
    },
    deliverables: [
      "Edge camera capture and real-time inference binary",
      "Administrative user enrolment and permission portal",
      "Relay door controller hardware trigger integration",
      "Automated attendance report generator (CSV & Excel)",
    ],
    outcomes: {
      primary: "Fast, touchless entry with a record of who came and went",
      secondary: "Complete elimination of buddy punching and physical keycards",
    },
    demoCta: "Discuss Biometric Deployment",
    storyRows: [
      {
        number: "01",
        title: "Built for Fast, Local Matching.",
        description:
          "Dual optical and infrared depth camera array triggers door relays and access turnstiles on-site, without waiting on the cloud.",
        image: "/images/products/face-recognition/macro.jpg",
        tag: "On-site door control",
      },
      {
        number: "02",
        title: "3D Anti-Spoofing That Elevates Security.",
        description:
          "Multi-spectral RGB and infrared depth verification defends against printed photos, mobile screen playback, and silicon mask spoofing.",
        image: "/images/offerings/face-recognition.webp",
        tag: "Anti-Spoofing Liveness",
      },
      {
        number: "03",
        title: "Privacy by Design.",
        description:
          "Faces are converted into irreversible 512-dimensional encrypted mathematical vectors. Raw photos are discarded immediately after enrollment.",
        image: "/images/works/acisvs_field_officer.png",
        tag: "GDPR Vector Security",
      },
    ],
  },
  {
    id: "turnkey-ecommerce",
    slug: "turnkey-ecommerce",
    name: "Turnkey E-Commerce & Web Platforms",
    shortName: "Websites & Shops",
    category: "Turnkey Web & Commerce",
    headlinePrimary: "Crafted for Performance.",
    headlineSecondary: "No Platform Commission.",
    tagline: "One team designs, builds, and launches your site or commerce store, including custom checkout and payments with no markup from us.",
    summary: "High-performance digital storefronts, custom checkout funnels, and automated inventory management with 100% code and database ownership.",
    detailedDescription: "Avoid recurring platform subscriptions and theme bloat. We engineer bespoke, fast digital storefronts built on Next.js, Stripe Connect, and PostgreSQL. Every component is designed around your products, with smooth page transitions, dynamic carts, and automated multi-currency checkout.",
    liveBadge: "You own the code",
    metricLabel: "You own",
    metricValue: "Full code",
    image: "/images/works/aura/home-hero.jpg",
    highlights: [
      "100% full source code and database ownership handed over",
      "No monthly platform fees and no commission added by us",
      "Apple Pay, Google Pay, international cards & local gateways",
      "Unified inventory, order dispatch, and customer CRM dashboard",
    ],
    specs: [
      { name: "Framework", value: "Next.js 16 App Router + Tailwind CSS" },
      { name: "Database", value: "PostgreSQL with Prisma ORM" },
      { name: "Payment Gateways", value: "Stripe Connect, PayPal, SSLCommerz, bKash" },
      { name: "Hosting", value: "Global CDN for fast page loads" },
    ],
    architecture: {
      frontend: "Next.js SSR/ISR + Responsive React Component Library",
      backend: "Next.js Server Actions + Node.js API Routes",
      modelsOrSensors: "Automated Search & Filter Indexing Engine",
      deployment: "Vercel / Cloudflare Pages + Neon Serverless PostgreSQL",
    },
    deliverables: [
      "Production-ready GitHub repository with full source code",
      "Connected Stripe / payment gateway merchant account",
      "Custom admin management portal for inventory and orders",
      "Automated email invoicing and customer transaction receipts",
    ],
    outcomes: {
      primary: "No recurring platform subscription or sales cut",
      secondary: "Fast, search-friendly pages that help you get found on Google",
    },
    demoCta: "Explore Turnkey E-Commerce",
    storyRows: [
      {
        number: "01",
        title: "Engineered for Pure Conversion.",
        description:
          "Fast page transitions on a global CDN and streamlined one-page checkout convert window shoppers into paying customers without theme bloat.",
        image: "/images/works/aura/catalog.jpg",
        tag: "Fast, search-friendly pages",
      },
      {
        number: "02",
        title: "Architecture That Elevates Margin.",
        description:
          "Direct Stripe Connect and multi-currency payment routing avoids monthly app subscriptions and platform transaction fees.",
        image: "/images/works/aura/product-view.jpg",
        tag: "Direct payments",
      },
      {
        number: "03",
        title: "Unified Operations. Full Ownership.",
        description:
          "A unified dashboard for inventory, orders, customer CRM, and shipping labels, backed by 100% full source code and database handover.",
        image: "/images/works/aura/delivery-gate.jpg",
        tag: "Full Code & DB Handover",
      },
    ],
  },
  {
    id: "geospatial-intelligence",
    slug: "geospatial-intelligence",
    name: "Geospatial Intelligence & LiDAR Engine",
    shortName: "Maps & Spatial",
    category: "Earth Observation & LiDAR",
    headlinePrimary: "Mapped from Space.",
    headlineSecondary: "Turned into Decisions.",
    tagline: "We turn satellite, radar, and aerial LiDAR data into verifiable spatial intelligence that researchers, municipalities, and engineers rely on.",
    summary: "Airborne 3D point cloud classification, Sentinel-1 SAR flood modeling, and machine-learning forest canopy segmentation validated with European research institutes.",
    detailedDescription: "Headed by co-founder Rafi (M.Sc. Geodesy, TU Berlin; ex-German Aerospace Center DLR), our geospatial practice processes petabyte-scale Earth observation imagery and high-density LiDAR point clouds. We engineer automated Python and C++ spatial pipelines to quantify rooftop solar PV yield, detect disaster flood inundation through cloud cover, and map individual tree crowns across entire cities.",
    liveBadge: "Aerial LiDAR and satellite",
    metricLabel: "Includes",
    metricValue: "Rooftop solar maps",
    image: "/images/works/lidar_rooftop_solar_pv.jpg",
    highlights: [
      "Airborne LiDAR rooftop segmentation for solar PV feasibility",
      "Sentinel-1 SAR radar flood extent modeling through monsoon cloud cover",
      "YOLOv12 neural crown detection for urban tree inventory",
      "Standard GeoPackage (.gpkg) and Cloud-Optimized GeoTIFF outputs",
    ],
    specs: [
      { name: "Elevation data", value: "Airborne LiDAR height models" },
      { name: "Satellite Feeds", value: "Sentinel-1 SAR, Sentinel-2 Optical, Landsat-9" },
      { name: "GIS Formats", value: "GeoPackage (.gpkg), COG, Shapefile, LAS/LAZ" },
      { name: "Validation Partner", value: "TU Berlin & German Aerospace Center (DLR)" },
    ],
    architecture: {
      frontend: "MapLibre GL / OpenLayers High-Performance WebGIS Viewer",
      backend: "Python PDAL + GDAL + Rasterio + GeoPandas Container",
      modelsOrSensors: "YOLOv12 Object Segmentation + Otsu SAR Thresholding",
      deployment: "AWS Batch Cloud Cluster / High-Memory Spatial EC2",
    },
    deliverables: [
      "Production GeoPackage vector layers ready for QGIS and ArcGIS",
      "Cloud-Optimized GeoTIFF raster digital surface models (DSM/DTM)",
      "Automated satellite data fetch and preprocessing pipeline scripts",
      "Executive PDF spatial audit and analytical findings report",
    ],
    outcomes: {
      primary: "Solar yield quantified for 1,073 buildings in our sample project",
      secondary: "Mapped 450 km² flood inundation within 4 hours of radar capture",
    },
    demoCta: "Request Geospatial Technical Audit",
    storyRows: [
      {
        number: "01",
        title: "Engineered for Scientific Accuracy.",
        description:
          "Classified 3D LiDAR point clouds calculate rooftop solar PV yield, roof tilt, and shading geometry from airborne laser scans.",
        image: "/images/works/tree_detection_5610.jpg",
        tag: "3D Point Cloud Modeling",
      },
      {
        number: "02",
        title: "Radar & Satellite That Elevates Decision-Making.",
        description:
          "Sentinel-1 Synthetic Aperture Radar (SAR) cuts through dense clouds and monsoons to map real-time flood inundation and crop vigor.",
        image: "/images/works/taif_flood_probability.jpg",
        tag: "Sentinel-1 SAR Radar",
      },
      {
        number: "03",
        title: "Standard GeoPackages. Direct Integration.",
        description:
          "All vectors and rasters are exported as open-standard GeoPackage (.gpkg) and Cloud Optimized GeoTIFF (COG), ready for QGIS and ArcGIS.",
        image: "/images/tree_crown.jpg",
        tag: "Open GIS Handover",
      },
    ],
  },
];

// Cover image for each product, shown whole at its own proportions.
export const PRODUCT_COVERS: Record<string, { src: string; alt: string }> = {
  "virtual-try-on": { src: "/images/products/virtual-try-on/lifestyle.jpg", alt: "A modern clothing store with a smart fitting mirror" },
  "ai-voice-receptionist": { src: "/images/products/ai-voice-receptionist/hero_natural.jpg", alt: "A front desk where an AI assistant helps handle calls" },
  "business-knowledge-assistant": { src: "/images/products/business-knowledge-assistant/hero.jpg", alt: "A laptop showing an assistant that cites its sources" },
  "face-recognition": { src: "/images/products/face-recognition/hero.jpg", alt: "A door terminal that recognises a visitor" },
  "turnkey-ecommerce": { src: "/images/works/aura/home-hero-wide.jpg", alt: "Home page of a clothing store we built" },
  "geospatial-intelligence": { src: "/images/satellite_detected.jpg", alt: "Satellite map showing a river flood extent and farm parcels" },
};
