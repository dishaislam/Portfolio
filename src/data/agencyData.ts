export const AGENCY_NAME = "utsho";
export const AGENCY_DISPLAY_NAME = "utsho";
export const AGENCY_TAGLINE = "turn your data into intelligence";
export const AGENCY_SUBTITLE = "Geospatial Engineering & AI Systems Studio";
export const AGENCY_MISSION =
  "utsho bridges orbital satellite Earth observation, airborne LiDAR point clouds, and enterprise computer vision with production generative AI. We transform high-volume raw spatial and business data into high-confidence intelligence.";

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: "gis" | "ai" | "combined";
  lead: "Rafi" | "Sharmin" | "Joint";
  description: string;
  deliverables: string[];
  tools: string[];
  icon: string;
  image?: string;
  galleryImages?: string[];
}

export type ProjectSectionId = "data-analysis" | "software" | "ai";

export interface ProjectSectionMeta {
  id: ProjectSectionId;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  section: ProjectSectionId;
  category: "satellite" | "ai" | "vision" | "webgis" | "software" | "ecommerce";
  author: "Rafi Mahmud Tumon" | "Sharmin Islam Disha" | "Joint Studio";
  badge: string;
  summary: string;
  fullDescription: string;
  tools: string[];
  metrics: string;
  image: string;
  galleryImages?: string[];
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  deliverables: string[];
}

export interface ScenarioItem {
  id: string;
  title: string;
  region: string;
  domain: string;
  lead: string;
  objective: string;
  dataSources: string;
  methodology: string;
  keyMetric: string;
  deliverableSummary: string;
  tools: string[];
  image: string;
}

export const AGENCY_METRICS = [
  { label: "Tree Crowns & Canopies Mapped", value: "100K+", subtext: "German Aerospace Center (DLR)" },
  { label: "LiDAR Buildings & Solar Yield", value: "1,073+", subtext: "Rooftop Irradiance & Shadow Modeling" },
  { label: "Cities Infrastructure Analyzed", value: "20+", subtext: "Fibre Rollout Efficiency +20%" },
  { label: "Upwork & Repeat Client Rating", value: "100%", subtext: "5-Star Top-Rated Delivery" },
];

export const MARQUEE_ITEMS = [
  "AI Voice Receptionists",
  "Virtual Try-On Systems",
  "Custom Websites & Web Apps",
  "Turnkey E-Commerce Stores",
  "Document AI & Knowledge Copilots",
  "Satellite Earth Observation & Radar",
  "Airborne LiDAR & 3D Canopy Mapping",
  "Predictive Machine Learning & Risk Scoring",
  "Computer Vision & Object Detection",
  "Flood Hazard & Risk Mapping",
  "Data Analytics & Interactive Dashboards",
  "Interactive Web GIS Applications",
  "Rooftop Solar & Shadow Analysis",
];

export const SERVICES: ServiceItem[] = [
  // ==========================================
  // PILLAR 1: WEB & AI ENGINEERING (Sharmin)
  // ==========================================
  {
    id: "website-engineering",
    title: "Build Your Own Website",
    tagline: "Custom Web Applications & Enterprise Platforms",
    category: "ai",
    lead: "Sharmin",
    description:
      "We design and architect full-stack web applications, company portals, client management platforms, and high-performance landing pages from scratch. Fast, responsive, SEO-ready, and tailored to business operations.",
    deliverables: [
      "Custom Next.js & React Full-Stack Apps",
      "REST & GraphQL API Architecture",
      "Role-Based Auth & User Management",
      "Mobile-first, fast-loading pages",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"],
    icon: "Laptop",
    image: "/images/works/edumentor_homepage.png",
    galleryImages: [
      "/images/works/aura_ecommerce_hero.jpg",
      "/images/works/edumentor_screen1.png",
      "/images/works/aura_ecommerce_artisan.jpg",
    ],
  },
  {
    id: "ecommerce-engineering",
    title: "Build an E-Commerce",
    tagline: "Digital Storefronts & Transactional Stores",
    category: "ai",
    lead: "Sharmin",
    description:
      "We develop complete, conversion-focused online stores, digital storefronts, and B2B catalog platforms. Includes automated shopping carts, multi-gateway checkout, inventory synchronization, and intuitive admin product management.",
    deliverables: [
      "Product & Variant Catalog Filtering",
      "Stripe & Multi-Gateway Payment Checkout",
      "Real-Time Cart & Order Inventory Sync",
      "High-Conversion Mobile Shopping Flow",
    ],
    tools: ["Next.js", "Stripe", "PostgreSQL", "TypeScript", "Tailwind CSS", "REST API"],
    icon: "ShoppingCart",
    image: "/images/works/aura_ecommerce_landing.jpg",
    galleryImages: [
      "/images/works/aura_ecommerce_hero.jpg",
      "/images/works/foshol360_live_dealer_portal.png",
      "/images/works/aura_ecommerce_auth.jpg",
    ],
  },
  {
    id: "data-insights",
    title: "Get Insights From Your Data",
    tagline: "Data Analytics & Interactive Business Intelligence",
    category: "ai",
    lead: "Sharmin",
    description:
      "We extract, clean, and model complex datasets into interactive dashboards and automated reporting pipelines. Transform raw tabular, transactional, or time-series data into clear visual KPIs for confident decision-making.",
    deliverables: [
      "Interactive Multi-Filter Telemetry Dashboards",
      "Automated ETL & Data Cleansing Pipelines",
      "SQL Data Warehouse Schema Modeling",
      "Executive KPI Monitoring & Automated Reports",
    ],
    tools: ["Python", "Pandas", "PostgreSQL", "SQL", "Recharts", "Next.js", "FastAPI"],
    icon: "BarChart3",
    image: "/images/works/credit_risk_shap_importance.jpg",
    galleryImages: [
      "/images/works/credit_risk_roc_curves.jpg",
      "/images/works/credit_risk_shap_waterfall.jpg",
      "/images/works/crop_predictions_breakdown.jpg",
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    tagline: "Predictive Modeling & Automated Decisions",
    category: "ai",
    lead: "Sharmin",
    description:
      "We build production-ready statistical and machine learning algorithms that automate risk assessment, churn prediction, classification, and forecasting with transparent, explainable feature attribution.",
    deliverables: [
      "Supervised Predictive Modeling (XGBoost, Random Forest)",
      "Risk Scoring & Anomaly Detection Classifiers",
      "Explainable AI (SHAP Waterfall Values & Feature Rankings)",
      "Dockerized Microservices with Automated Retraining",
    ],
    tools: ["XGBoost", "Scikit-Learn", "FastAPI", "SHAP", "Python", "Docker"],
    icon: "Cpu",
    image: "/images/works/credit_risk_roc_curves.jpg",
    galleryImages: [
      "/images/works/credit_risk_shap_waterfall.jpg",
      "/images/works/credit_risk_shap_importance.jpg",
      "/images/works/vetdoctor_diagnostic_mockup.png",
    ],
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    tagline: "Computer Vision & Autonomous AI",
    category: "ai",
    lead: "Sharmin",
    description:
      "We engineer deep neural architectures across visual perception and natural language. From real-time object detection and image segmentation to document retrieval copilots that parse complex statutory texts with semantic citations.",
    deliverables: [
      "Real-Time Object Detection & Segmentation (YOLO, PyTorch)",
      "Semantic Document RAG with Verified Citations",
      "Fine-Tuned Embeddings & Vector Search (pgvector)",
      "Automated Feature Extraction & Document OCR",
    ],
    tools: ["PyTorch", "YOLOv12", "LangChain", "OpenCV", "pgvector", "Python"],
    icon: "BrainCircuit",
    image: "/images/works/tree_detection_5610.jpg",
    galleryImages: [
      "/images/works/legal_support_composite.jpg",
      "/images/works/foshol360_live_crop_ai.png",
      "/images/works/legal_support_document_analysis.jpg",
    ],
  },

  // ==========================================
  // PILLAR 2: GIS & GEOSPATIAL INTELLIGENCE (Rafi)
  // ==========================================
  {
    id: "gis-analyst",
    title: "GIS Analyst",
    tagline: "Satellite Earth Observation & LiDAR",
    category: "gis",
    lead: "Rafi",
    description:
      "We process satellite radar (SAR), multispectral imagery, and airborne 3D LiDAR point clouds to delineate structures, model natural terrain hazards, calculate solar irradiance, and build enterprise spatial databases.",
    deliverables: [
      "Sentinel-1 SAR Radar Flood & Change Inundation",
      "Airborne LiDAR 3D Building Extraction & Solar Yield",
      "Enterprise PostGIS Spatial Databases & ETL Pipelines",
      "Publication-Grade 300 DPI Cartography & GeoPackages",
    ],
    tools: ["Sentinel-1", "3D LiDAR", "PostGIS", "QGIS", "Google Earth Engine", "GDAL"],
    icon: "Globe2",
    image: "/images/works/lidar_rooftop_solar_pv.jpg",
    galleryImages: [
      "/images/works/taif_flood_probability.jpg",
      "/images/works/solar_elevation_profile.jpg",
      "/images/works/berlin_street_network.jpg",
    ],
  },

  // ==========================================
  // BRIDGE: SPATIAL AI SYNERGY (Joint)
  // ==========================================
  {
    id: "spatial-ai-synergy",
    title: "Spatial AI: Conversational Geo-Intelligence",
    tagline: "Connecting conversational AI agents directly to PostGIS spatial databases & satellite rasters",
    category: "combined",
    lead: "Joint",
    description:
      "Our flagship synergy: We connect conversational AI agents directly to PostGIS databases, satellite time-series, and LiDAR models. Query property zoning, flood vulnerability, and crop health using natural language.",
    deliverables: [
      "Full-stack Web GIS & AI Chatbot platform with natural language spatial query",
      "Multi-modal spatial reasoning pipelines bridging vector embeddings & rasters",
      "Interactive Leaflet / MapLibre visualization layer with responsive spatial filters",
      "Comprehensive cloud deployment on Vercel, Supabase & AWS",
    ],
    tools: ["PostGIS", "Leaflet.js", "FastAPI", "Next.js", "Satellite APIs", "Vector RAG"],
    icon: "Sparkles",
    image: "/images/works/gis_analysis_map.jpg",
    galleryImages: [
      "/images/works/rajshahi_urban_fabric.jpg",
      "/images/works/building_exposure_chart.jpg",
    ],
  },
];

export const PROJECT_SECTIONS: ProjectSectionMeta[] = [
  {
    id: "software",
    index: "01",
    title: "Websites, shops and apps",
    subtitle: "Online shops, business websites and mobile apps that are in use today",
    description:
      "Production web applications and backend systems engineered by Sharmin. Spanning responsive digital platforms, offline-first field synchronization protocols, and enterprise distributor order infrastructure.",
    iconName: "Code",
  },
  {
    id: "ai",
    index: "02",
    title: "AI agents and models",
    subtitle: "Assistants, diagnosis tools and prediction models built for real clients",
    description:
      "Intelligent systems engineered by Sharmin. Incorporating bilingual statutory legal copilots, plant pathology deep learning computer vision, clinical diagnostic reasoning engines, and transparent SHAP waterfall risk modeling.",
    iconName: "Brain",
  },
  {
    id: "data-analysis",
    index: "03",
    title: "Maps and satellite intelligence",
    subtitle: "Satellite, aerial and LiDAR analysis turned into maps and decisions",
    description:
      "Scientific Earth observation pipelines and spatial analytics engineered by Rafi. Incorporating Sentinel-1 radar flood prediction, 1,073 LiDAR building solar PV modeling, 5,610 individual tree canopy segmentation, and hydrodynamic flood exposure grids.",
    iconName: "Globe",
  },
];

export const PROJECTS: ProjectItem[] = [
  // ==========================================
  // SECTION 01: WEBSITE & BACKEND ENGINEERING
  // ==========================================
  {
    id: "aura-ecommerce",
    title: "Website: Modern Luxury Artisanal E-Commerce Web Platform",
    section: "software",
    category: "ecommerce",
    author: "Sharmin Islam Disha",
    badge: "Website • Full-Stack Web Platform",
    summary:
      "Modern luxury fashion e-commerce web platform featuring artisanal editorial lookbooks, multi-category apparel filtering, real-time cart state, and customer authentication.",
    fullDescription:
      "Architected and engineered a full-stack digital commerce web application. Built with high-performance Next.js and Tailwind CSS, the platform showcases hand-crafted artisanal collections through responsive campaign lookbooks, dynamic stock inventory, multi-tiered category filtering, and an integrated shopping cart checkout flow.",
    tools: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL", "REST API", "Docker"],
    metrics: "Artisanal Catalog • Responsive Cart & Checkout",
    image: "/images/works/aura_ecommerce_landing.jpg",
    galleryImages: [
      "/images/works/aura_ecommerce_hero.jpg",
      "/images/works/aura_ecommerce_artisan.jpg",
      "/images/works/aura_ecommerce_auth.jpg",
    ],
    deliverables: [
      "Artisanal luxury e-commerce storefront with campaign editorial banners",
      "Dynamic catalog filtering across luxury ethnic and festive wear categories",
      "Persistent client-side shopping bag with real-time subtotal calculation",
      "Secure customer authentication, order review, and account management",
    ],
  },
  {
    id: "edumentor-app",
    title: "Website: Adaptive Educational Curriculum & Testing Portal",
    section: "software",
    category: "software",
    author: "Sharmin Islam Disha",
    badge: "Website • Interactive Learning Portal",
    summary:
      "Interactive educational web platform delivering adaptive learning modules, curriculum courseware management, timed quiz assessments, and student progress metrics.",
    fullDescription:
      "Engineered an interactive educational web portal designed for curriculum delivery and student competency benchmarking. The platform features dynamic subject syllabi, structured lesson tracks, interactive timed quiz examinations with immediate diagnostic answer analysis, and comprehensive administrative dashboards for curriculum instructors.",
    tools: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    metrics: "Multi-Tier Curriculum • Interactive Testing Engine",
    image: "/images/works/edumentor_screen1.png",
    galleryImages: [
      "/images/works/edumentor_screen2.png",
      "/images/works/edumentor_screen3.png",
      "/images/works/edumentor_screen4.png",
      "/images/works/edumentor_homepage.png",
    ],
    deliverables: [
      "Interactive student exam and timed quiz assessment engine",
      "Structured curriculum and multi-module course lesson manager",
      "Diagnostic score cards with per-topic mastery metrics",
      "Responsive instructor portals for question banking and syllabus scheduling",
    ],
  },
  {
    id: "aci-svs",
    title: "Backend: Offline-First Field Mobile Architecture & Cloud Sync APIs",
    section: "software",
    category: "software",
    author: "Sharmin Islam Disha",
    badge: "Backend • Offline Mobile & API Sync",
    summary:
      "Comprehensive mobile and cloud backend for field officers featuring weight-based dosage calculators, aqua feed estimation, digital farmer profiles, and remote case records.",
    fullDescription:
      "Engineered a mission-critical mobile application and cloud backend architecture specifically designed for field officers operating in rural areas with zero internet connectivity. The platform delivers instant active-molecule dosage calculations, fish pond aqua feed estimation, offline SQLite case management, and scheduled sync when connectivity resumes.",
    tools: ["React Native / Android", "SQLite Offline Storage", "FastAPI", "Tailwind CSS", "Docker"],
    metrics: "100% Offline Capability • 5-Step Field Assessment",
    image: "/images/works/acisvs_mobile_mockup1.png",
    galleryImages: [
      "/images/works/acisvs_field_officer.png",
      "/images/works/acisvs_case_management.png",
      "/images/works/acisvs_mobile_mockup3.png",
      "/images/works/acisvs_logo.png",
    ],
    deliverables: [
      "Offline-first veterinary dosage and aqua feed calculator engine",
      "Digital farmer registry with GPS field coordinates and case history",
      "5-step standardized livestock assessment workflow",
      "Bi-directional synchronization layer syncing offline records with central Postgres",
    ],
  },
  {
    id: "foshol360-b2b-portal",
    title: "Backend: Enterprise B2B Agrochemical Order & Supply Infrastructure",
    section: "software",
    category: "ecommerce",
    author: "Sharmin Islam Disha",
    badge: "Backend • Enterprise Cloud Order Flow",
    summary:
      "Enterprise agricultural distributor portal facilitating bulk agrochemical ordering, tiered dealer wholesale pricing, stock availability, and invoice tracking.",
    fullDescription:
      "Architected the B2B commerce layer for an agricultural supply ecosystem. Licensed chemical dealers and farm cooperatives access wholesale catalogs of fungicides, pesticides, and micronutrients with tiered volume pricing, invoice generation, and real-time inventory management across regional supply depots.",
    tools: ["Next.js", "TypeScript", "PostgreSQL", "FastAPI", "Tailwind CSS", "Docker"],
    metrics: "Dealer Wholesale Flow • Multi-Tenant Inventory",
    image: "/images/works/foshol360_live_dealer_portal.png",
    galleryImages: [
      "/images/works/foshol360_dealer_banner.jpg",
      "/images/works/foshol360_platform_dashboard.png",
      "/images/works/foshol360_mobile_dealer.png",
    ],
    deliverables: [
      "B2B Agrochemical dealer ordering and catalog search",
      "Dynamic dealer discount tiers and bulk checkout system",
      "Real-time warehouse inventory and shipment tracking",
      "Multi-tenant merchant administration console",
    ],
  },

  // ==========================================
  // SECTION 02: AI INTEGRATION & MODEL TRAINING
  // ==========================================
  {
    id: "legalsupport-ai",
    title: "AI Integration: Bilingual Statutory Legal Copilot & Document OCR Parser",
    section: "ai",
    category: "ai",
    author: "Sharmin Islam Disha",
    badge: "AI Integration • Multi-Turn RAG",
    summary:
      "Production bilingual legal AI assistant answering statutory inquiries (FIR filing, bail, citizen rights) and parsing legal contracts with clause risk extraction.",
    fullDescription:
      "Engineered an enterprise-grade AI legal advisory copilot tailored for statutory jurisprudence and legal codes. Features multi-turn conversational advisory in Bengali and English, automated PDF document analysis for petitions, deeds, and affidavits, citation-grounded RAG retrieval, and step-by-step police FIR filing procedural guidance.",
    tools: ["Next.js", "FastAPI", "pgvector", "LangChain", "Bangla NLP", "Document OCR", "Python"],
    metrics: "Bilingual NLP • Automated PDF Clause Analysis",
    image: "/images/works/legal_support_composite.jpg",
    galleryImages: [
      "/images/works/legal_support_assistant_welcome.jpg",
      "/images/works/legal_support_document_analysis.jpg",
      "/images/works/legal_support_chat.jpg",
      "/images/works/legal_support_context_thread.jpg",
    ],
    deliverables: [
      "Bilingual Conversational Legal Copilot (Bengali & English)",
      "Automated PDF Legal Contract & Petition Scanner",
      "Statutory Citation-Grounding & Context Retrieval Engine",
      "Production FastAPI backend with streaming token endpoints",
    ],
  },
  {
    id: "vetdoctor-ai",
    title: "Model Training: Multi-Species Veterinary Clinical Diagnostic Engine",
    section: "ai",
    category: "ai",
    author: "Sharmin Islam Disha",
    badge: "Model Training • Clinical Diagnostic AI",
    summary:
      "AI-powered veterinary diagnostic assistant featuring multi-species symptom analysis, differential diagnostic reasoning, and medication advisory.",
    fullDescription:
      "Architected a specialized diagnostic and advisory platform for veterinary medicine. The core system evaluates reported clinical symptoms across cattle, poultry, dogs, and cats to suggest probable pathological conditions, flags urgent emergency contraindications, and tracks vaccination regimens.",
    tools: ["Python 3.12", "FastAPI", "PyTorch", "React", "PostgreSQL 17", "Prometheus", "Docker"],
    metrics: "Multi-Species Symptom Reasoning • Real-Time Advisory",
    image: "/images/works/vetdoctor_diagnostic_mockup.png",
    galleryImages: [
      "/images/works/acisvs_mobile_mockup2.png",
      "/images/works/vetdoctor_hero.png",
    ],
    deliverables: [
      "AI-driven clinical diagnostic advisory engine for pets and livestock",
      "Symptom checklist and differential diagnosis suggestion pipeline",
      "Vaccination schedule timeline and preventive health tracker",
      "High-performance FastAPI service with Prometheus metrics",
    ],
  },
  {
    id: "foshol-doctor-vision",
    title: "Model Training: Deep Learning Plant Leaf Pathology Computer Vision",
    section: "ai",
    category: "vision",
    author: "Sharmin Islam Disha",
    badge: "Model Training • Crop Leaf Pathology",
    summary:
      "Deep learning convolutional neural network pipeline diagnosing crop leaf diseases from field photos and recommending targeted curative chemical treatments.",
    fullDescription:
      "Engineered an automated agricultural pathology diagnostic pipeline. Using deep convolutional vision architectures trained on thousands of plant leaf images, the model diagnoses Rice Blast, Potato Late Blight, Tomato Leaf Curl, and nutrient deficiencies with sub-second latency, linking diagnoses to curative agrochemical recommendations.",
    tools: ["PyTorch", "Convolutional Neural Networks", "OpenCV", "FastAPI", "Docker", "Mobile Vision"],
    metrics: "Sub-second Leaf Pathology • 94.2% Diagnostic Accuracy",
    image: "/images/works/foshol360_live_crop_ai.png",
    galleryImages: [
      "/images/works/foshol360_crop_doctor_step1.png",
      "/images/works/foshol360_crop_doctor_step2.png",
      "/images/works/foshol360_crop_doctor_step3.png",
      "/images/works/foshol360_composite.jpg",
    ],
    deliverables: [
      "Computer vision leaf pathology diagnostic inference pipeline",
      "Multi-disease classifier (Rice Blast, Potato Late Blight, Tomato Curl)",
      "Automated curative chemical treatment mapper",
      "Mobile photo scan camera interface",
    ],
  },
  {
    id: "explainable-credit-ml",
    title: "Model Training: Supervised Credit Risk Machine Learning with SHAP Waterfall Interpretability",
    section: "ai",
    category: "ai",
    author: "Sharmin Islam Disha",
    badge: "Model Training • Explainable AI (SHAP)",
    summary:
      "Supervised credit default risk prediction reaching 0.862 ROC-AUC with SHAP global importance and local applicant waterfall explanations.",
    fullDescription:
      "Tackled regulated lending risk modeling using XGBoost and Random Forest on 150,000 borrower profiles. Built comprehensive explainability using SHAP (SHapley Additive exPlanations), producing global feature importance rankings and local waterfall charts to legally justify credit decisions.",
    tools: ["Python", "XGBoost", "Random Forest", "SHAP", "scikit-learn", "Matplotlib"],
    metrics: "0.862 ROC-AUC • Transparent SHAP",
    image: "/images/works/credit_risk_shap_waterfall.jpg",
    galleryImages: [
      "/images/works/credit_risk_shap_importance.jpg",
      "/images/works/credit_risk_roc_curves.jpg",
    ],
    deliverables: [
      "Trained XGBoost & Random Forest risk pipelines",
      "SHAP individual applicant explanation dashboard",
      "Audited feature impact reports for regulatory compliance",
    ],
  },

  // ==========================================
  // SECTION 03: DATA ANALYSIS & GEOSPATIAL ENGINEERING
  // ==========================================
  {
    id: "taif-flood-sar",
    title: "Taif Flash Flood Susceptibility via Sentinel-1 SAR & Machine Learning",
    section: "data-analysis",
    category: "satellite",
    author: "Rafi Mahmud Tumon",
    badge: "Published Research • Taif Basin",
    summary:
      "Reproducible radar SAR and Random Forest machine learning pipeline mapping flash flood susceptibility with 0.82 ROC-AUC.",
    fullDescription:
      "Integrated Sentinel-1 Synthetic Aperture Radar (SAR) backscatter data with topographic hydrology factors (slope, HAND, TWI, stream power, distance to drainage, GPM IMERG rainfall) to model flash flood hazard zones in the Taif region. Built an end-to-end Python pipeline with spatial-block cross validation and SHAP interaction analysis, achieving 0.82 ROC-AUC.",
    tools: ["Sentinel-1 SAR", "Random Forest", "QGIS", "Rasterio", "GeoPandas", "Python", "SHAP"],
    metrics: "0.82 ROC-AUC • 10m Resolution",
    image: "/images/works/taif_flood_probability.jpg",
    galleryImages: [
      "/images/works/taif_flood_workflow.jpg",
      "/images/works/taif_study_area.jpg",
      "/images/works/taif_predictor_importance.jpg",
      "/images/works/taif_imerg_rainfall.jpg",
      "/images/works/taif_hydrology_features.jpg",
    ],
    deliverables: [
      "Print-ready Flood Zonation PDF Map (UTM Zone 37N)",
      "GeoTIFF Susceptibility Raster (0 to 1.0 probability)",
      "Reproducible Python pipeline with spatial-block CV",
    ],
  },
  {
    id: "lidar-solar-pv",
    title: "1,073 LiDAR Building Footprints & Rooftop Solar PV Yield Modeling",
    section: "data-analysis",
    category: "satellite",
    author: "Rafi Mahmud Tumon",
    badge: "Airborne LiDAR • Solar Energy",
    summary:
      "Extracted 1,073 3D building footprints from airborne LiDAR, classified roof slope and aspect, and modeled annual solar irradiance with shadow ray-tracing.",
    fullDescription:
      "Built an advanced LiDAR processing pipeline to evaluate solar photovoltaic rooftop feasibility. Extracted bare-earth DTM and surface nDSM, performed roughness filtering to delineate 1,073 building footprints, calculated roof facet pitch/azimuth, and computed annual solar irradiance (kWh/m²/yr) including winter/summer solstice shadow casting from neighboring canopies.",
    tools: ["LiDAR Point Cloud", "PDAL", "laspy", "QGIS", "Solar Ray-Tracing", "Python"],
    metrics: "1,073 Buildings • Full Shadow Model",
    image: "/images/works/lidar_rooftop_solar_pv.jpg",
    galleryImages: [
      "/images/works/lidar_building_footprints.jpg",
      "/images/works/lidar_solar_yield.jpg",
      "/images/works/solar_pv_orientation_compass.jpg",
      "/images/works/lidar_osm_validation.jpg",
      "/images/works/ndsm_roughness_footprints.jpg",
      "/images/works/dsm_hillshade_slope.jpg",
    ],
    downloadUrl: "/downloads/buildings_lidar.gpkg",
    downloadLabel: "Download Sample GeoPackage (1,073 Buildings)",
    deliverables: [
      "Vectorized building footprints GeoPackage with height attributes",
      "Annual solar irradiance raster (kWh/m²/year)",
      "Individual building estimated PV yield summary table (Excel/CSV)",
    ],
  },
  {
    id: "tree-detection-5610",
    title: "5,610 Individual Tree Detection & Canopy Height from LiDAR & NDVI",
    section: "data-analysis",
    category: "vision",
    author: "Rafi Mahmud Tumon",
    badge: "Forestry & Canopy AI",
    summary:
      "Delineated 5,610 individual trees and measured canopy heights using LiDAR nDSM fused with Sentinel-2 NDVI spectral masking.",
    fullDescription:
      "Engineered an automated forestry intelligence workflow fusing airborne LiDAR with Sentinel-2 NDVI imagery. Extracted Canopy Height Models (CHM), filtered out non-vegetation man-made structures, performed watershed segmentation to isolate 5,610 individual tree crowns, and mapped tree height distributions across urban and natural reserves.",
    tools: ["LiDAR", "Sentinel-2 NDVI", "Watershed Segmentation", "QGIS", "laspy", "GeoPandas"],
    metrics: "5,610 Trees Mapped • 1m Accuracy",
    image: "/images/works/tree_detection_5610.jpg",
    galleryImages: [
      "/images/works/chm_watershed_treetops.jpg",
      "/images/works/lidar_chm_vs_ndvi.jpg",
      "/images/works/chm_ndvi_fusion_ablation.jpg",
      "/images/works/canopy_cover_density.jpg",
    ],
    deliverables: [
      "Vector Shapefile of individual tree tops and crown polygons",
      "Canopy Height Model (CHM) GeoTIFF",
      "Tree height distribution & biomass statistics report",
    ],
  },
  {
    id: "crop-type-timeseries",
    title: "Multi-Temporal Satellite Crop Classification (Soybean, Maize, Potato, Sunflower)",
    section: "data-analysis",
    category: "satellite",
    author: "Rafi Mahmud Tumon",
    badge: "Sentinel-2 Phenology AI",
    summary:
      "Demonstrated how multi-temporal satellite time-series outperforms single-date imagery, eliminating spectral confusion across crop species.",
    fullDescription:
      "Developed a machine learning classification pipeline for agricultural parcels. Ingested Sentinel-2 multi-spectral time-series capturing crop phenological development. Proved that temporal feature vectors drastically resolve spectral overlaps between Maize, Soybean, Potato, and Sunflower, delivering clean confusion matrices and verified test predictions.",
    tools: ["Sentinel-2 Time-Series", "scikit-learn", "Python", "Rasterio", "Confusion Matrix"],
    metrics: "4 Major Crops • Temporal Fusions",
    image: "/images/works/crop_classification_temporal.jpg",
    galleryImages: [
      "/images/works/crop_confusion_matrix.jpg",
      "/images/works/crop_predictions_breakdown.jpg",
      "/images/works/crop_f1_score_breakdown.jpg",
    ],
    deliverables: [
      "Crop classification map (GeoTIFF)",
      "Temporal vs Single-date comparative accuracy report",
      "Per-class precision, recall & F1 benchmarks",
    ],
  },
  {
    id: "fema-flood-exposure",
    title: "FEMA 100-Year Floodplain & Building Exposure Analysis",
    section: "data-analysis",
    category: "webgis",
    author: "Rafi Mahmud Tumon",
    badge: "Hydrological Hazard Modeling",
    summary:
      "Hydrodynamic flood exposure analysis mapping residential and commercial structures within FEMA 100-year floodplains at multiple water levels.",
    fullDescription:
      "Combined bare-earth Digital Terrain Models (DTM) with FEMA flood insurance study layers. Calculated building exposure across multiple stage elevations (+0.5m, +1.0m, +2.0m above base floodplain), generating cross-sectional elevation profiles and vulnerability matrices for infrastructure planners.",
    tools: ["Bare-earth DTM", "FEMA Flood Layers", "QGIS", "Python", "Spatial Overlay"],
    metrics: "Multi-level Inundation (+0.5m, +1m, +2m)",
    image: "/images/works/building_flood_exposure.jpg",
    galleryImages: [
      "/images/works/bare_earth_dtm.jpg",
      "/images/works/building_exposure_chart.jpg",
      "/images/works/flood_cross_section.jpg",
    ],
    deliverables: [
      "Vulnerability-classified building footprint layer (GeoJSON)",
      "Flood depth grid rasters",
      "Exposure count summary tables by water elevation",
    ],
  },
  {
    id: "berlin-street-cartography",
    title: "Berlin Street Network & Cartography Urban Fabric",
    section: "data-analysis",
    category: "webgis",
    author: "Rafi Mahmud Tumon",
    badge: "Fine Cartography & OSM",
    summary:
      "Artistic high-contrast cartography analyzing street hierarchies, motorways, primary, secondary, and local roads across Greater Berlin.",
    fullDescription:
      "Extracted, cleaned, and symbolized the complete street network topology of Berlin from OpenStreetMap. Categorized road hierarchy (Motorways, Primary Roads, Secondary Roads, Other Streets) into a striking, publication-grade dark cartographic print map with custom GIS typography and vector layout.",
    tools: ["QGIS", "OpenStreetMap", "PostGIS", "Vector Cartography", "OSMnx"],
    metrics: "100% Vector Coverage • 300 DPI Print",
    image: "/images/works/berlin_street_network.jpg",
    galleryImages: [
      "/images/works/rajshahi_urban_fabric.jpg",
      "/images/works/co2_emissions_global.jpg",
    ],
    deliverables: [
      "High-resolution vector PDF & GeoTIFF map (300 DPI)",
      "Cleaned topological road network GeoPackage",
      "Road length & connectivity statistics",
    ],
  },
];

export const SIMULATION_SCENARIOS: ScenarioItem[] = [
  {
    id: "taif-flood",
    title: "Taif Flash Flood Susceptibility (Sentinel-1 SAR)",
    region: "Taif Basin, Saudi Arabia",
    domain: "Radar Remote Sensing & Hydrology",
    lead: "Rafi Mahmud Tumon",
    objective: "Identify flash flood hazardous zones using SAR backscatter, GPM IMERG rainfall, and terrain hydrology.",
    dataSources: "Sentinel-1 GRD SAR, SRTM 30m DEM, ALOS PALSAR 12.5m, GPM IMERG event rainfall, WorldCover",
    methodology: "Random Forest ML classifier trained on historical inundation points with spatial-block CV and SHAP feature attribution.",
    keyMetric: "ROC-AUC 0.82 (High Predictive Confidence)",
    deliverableSummary: "Zonated Risk GeoTIFF (Very Low to Very High), Shapefile stream buffers, and executive scientific paper.",
    tools: ["Sentinel-1", "Random Forest", "QGIS", "Rasterio", "GeoPandas", "SHAP"],
    image: "/images/works/taif_flood_probability.jpg",
  },
  {
    id: "legalsupport-rag",
    title: "AI Integration: Statutory RAG & Bilingual Legal Copilot",
    region: "LegalTech & Regulatory Advisory",
    domain: "AI Integration, Document OCR & Statutory RAG",
    lead: "Sharmin Islam Disha",
    objective: "Democratize statutory legal guidance and automate document review through citation-grounded RAG in English and Bengali.",
    dataSources: "Statutory acts, court precedent records, and legal document uploads (petitions, FIRs, deeds).",
    methodology: "Dense semantic embeddings with pgvector, cross-encoder reranking, and domain-prompted LLMs with strict statutory citations.",
    keyMetric: "96.4% Citation Precision • Multi-Turn Context",
    deliverableSummary: "Bilingual legal assistant API, document clause risk analyzer, and interactive chat interface.",
    tools: ["FastAPI", "pgvector", "LangChain", "Next.js", "Document OCR", "Python"],
    image: "/images/works/legal_support_tight.jpg",
  },
  {
    id: "lidar-solar",
    title: "LiDAR Rooftop Solar Irradiance & Shadow Tracing",
    region: "Urban Residential District",
    domain: "3D LiDAR & Solar Energy Engineering",
    lead: "Rafi Mahmud Tumon",
    objective: "Extract 3D building rooftops and calculate annual solar energy potential considering tree and roof shadow cast.",
    dataSources: "Airborne LiDAR point cloud, bare-earth DTM, digital surface model (nDSM), solar ephemeris tables",
    methodology: "nDSM height extraction, roof pitch/azimuth geometry calculation, and hemispherical sky-view solar ray-tracing.",
    keyMetric: "1,073 Roofs Analyzed • Solstice Shadows Modeled",
    deliverableSummary: "Annual irradiance raster (kWh/m²/yr), building footprint GeoPackage, and per-roof PV yield Excel report.",
    tools: ["LiDAR", "PDAL", "laspy", "Solar Radiation Modeling", "QGIS"],
    image: "/images/works/lidar_rooftop_solar_pv.jpg",
  },
  {
    id: "foshol360-ecommerce-ai",
    title: "Model Training & Backend: Crop Pathology Vision & B2B Order Flow",
    region: "Agricultural Hubs & Rural Supply Chains",
    domain: "Model Training & Enterprise Backend Infrastructure",
    lead: "Sharmin Islam Disha",
    objective: "Empower farmers with instant mobile leaf disease diagnosis while seamlessly connecting agrochemical dealers to a transactional digital marketplace.",
    dataSources: "12,000+ curated crop pathology leaf images (Rice, Potato, Tomato), chemical registries, and real-time dealer inventory streams.",
    methodology: "Convolutional neural network for multi-class leaf lesion diagnosis, integrated into a Next.js / FastAPI transactional e-commerce engine with inventory management.",
    keyMetric: "94.8% Field Diagnostic Accuracy • Full B2B Ordering Flow",
    deliverableSummary: "Production e-commerce catalog, dealer portal, mobile diagnostics app, and automated SKU recommendation engine.",
    tools: ["Next.js", "FastAPI", "PyTorch", "PostgreSQL", "Docker", "Tailwind CSS"],
    image: "/images/works/foshol360_tight.jpg",
  },
  {
    id: "tree-canopy-5610",
    title: "5,610 Individual Tree Detection & Canopy Heights",
    region: "Forestry & Urban Green Reserves",
    domain: "LiDAR & Deep Learning Vision",
    lead: "Rafi Mahmud Tumon",
    objective: "Delineate individual tree crowns and measure heights across dense forest canopies for biomass and audit reporting.",
    dataSources: "High-density LiDAR point clouds, bare-earth DTM, and Sentinel-2 multi-spectral NDVI",
    methodology: "Canopy Height Model (CHM) generation, vegetation index masking, and local-maxima watershed tree crown delineation.",
    keyMetric: "5,610 Trees Delineated • Sub-meter Height Precision",
    deliverableSummary: "Vectorized tree centroid points, crown bounding polygons, and height attribute GeoPackage.",
    tools: ["LiDAR", "Sentinel-2 NDVI", "Watershed Delineation", "laspy", "QGIS"],
    image: "/images/works/tree_detection_5610.jpg",
  },
  {
    id: "explainable-ml",
    title: "Explainable Risk Scoring with SHAP Waterfall Plots",
    region: "Regulated Financial Enterprise",
    domain: "Explainable Machine Learning (XAI)",
    lead: "Sharmin Islam Disha",
    objective: "Provide transparent, regulatory-compliant credit default predictions with individual decision justification.",
    dataSources: "150,000 historical borrower loan profiles with repayment history, debt ratios, and income data",
    methodology: "XGBoost and Random Forest with class imbalance handling, combined with exact TreeSHAP attribution and waterfall plots.",
    keyMetric: "0.862 ROC-AUC • 100% Explainable Decisions",
    deliverableSummary: "Trained XGBoost models, SHAP waterfall explanation engine, and compliance auditing documentation.",
    tools: ["Python", "XGBoost", "SHAP", "scikit-learn", "FastAPI"],
    image: "/images/works/credit_risk_shap_waterfall.jpg",
  },
  {
    id: "berlin-roads",
    title: "Berlin Street Network Graph & Cartography",
    region: "Berlin Metropolitan Area, Germany",
    domain: "Spatial Graphs & Fine Cartography",
    lead: "Rafi Mahmud Tumon",
    objective: "Construct a topological street network graph and design an artistic publication-grade cartographic atlas.",
    dataSources: "OpenStreetMap planet road vectors, administrative boundary geometries, and hydrological layers",
    methodology: "Road hierarchy topology extraction (motorways, primary, secondary), street network spatial graph analysis, and cartographic layout.",
    keyMetric: "100% Vector Completeness • 300 DPI Fine Cartography",
    deliverableSummary: "Print-ready high-resolution vector PDF/GeoTIFF and cleaned spatial network GeoPackage.",
    tools: ["QGIS", "OpenStreetMap", "PostGIS", "OSMnx", "Python"],
    image: "/images/works/berlin_street_network.jpg",
  },
];

export const FOUNDERS = [
  {
    name: "Sharmin Islam Disha",
    role: "Co-Founder & Lead AI Engineer",
    badge: "5+ Years Experience • Web & AI Systems",
    image: "/images/sharmin_profile.jpg",
    bio: "Software and AI Systems Engineer with 5+ years of commercial and production experience architecting full-stack web platforms, transactional e-commerce stores, predictive machine learning models, and enterprise generative AI copilots.",
    credentials: [
      "5+ Years Experience across Full-Stack Web, Machine Learning & AI",
      "Architect of Enterprise Web Platforms & E-Commerce Storefronts",
      "Explainable Machine Learning with SHAP & XGBoost (0.862 ROC-AUC)",
      "Production Computer Vision & Statutory Agentic RAG Copilot Systems",
    ],
    skills: ["Generative AI", "Agentic RAG", "Computer Vision", "FastAPI", "Next.js", "PyTorch", "SHAP", "pgvector", "Docker"],
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      upwork: "https://www.upwork.com",
      email: "mailto:contact@utsho.studio",
    },
  },
  {
    name: "Rafi Mahmud Tumon",
    role: "Co-Founder & Lead Geospatial Specialist",
    badge: "M.Sc. TU Berlin • Ex-DLR & OXG",
    image: "/images/rafi_profile.png",
    bio: "GIS, Remote Sensing, and Computer Vision specialist with 5+ years of international research and industry experience. Former researcher at the German Aerospace Center (DLR) and Geospatial Data Analyst at OXG Glasfaser GmbH.",
    credentials: [
      "M.Sc. in Geodesy and Geoinformation Science, TU Berlin",
      "Extracted 100,000+ tree crowns using deep learning at German Aerospace Center (DLR)",
      "Mapped 5,610+ individual trees and 1,073 building solar PV yields from airborne LiDAR",
      "Published SAR Flash Flood susceptibility research (Taif Basin, ROC-AUC 0.82)",
      "Automated geospatial infrastructure analysis across 20+ cities in Germany",
      "Upwork Top-Rated GIS Specialist with repeat global clients",
    ],
    skills: ["QGIS & ArcGIS Pro", "Sentinel-1/2 SAR", "LiDAR & PDAL", "PostGIS & SQL", "Google Earth Engine", "YOLOv12", "Web GIS"],
    links: {
      portfolio: "https://rafimt.github.io/rafi.io/",
      github: "https://github.com/rafimt",
      linkedin: "https://www.linkedin.com/in/rafimahmudtumon",
      upwork: "https://www.upwork.com",
      email: "mailto:rmtumon@gmail.com",
    },
  },
];

export const PRICING_PACKAGES = [
  {
    id: "starter-gis",
    name: "One-Off Spatial & Map Sprint",
    price: "$250 - $600",
    period: "Per Project",
    tagline: "Ideal for map digitizing, parcel research, satellite change detection, or custom cartography.",
    features: [
      "GIS analysis, georeferencing & map digitizing (QGIS/ArcGIS)",
      "Satellite land cover or deforestation change detection",
      "Clean deliverables: GeoJSON, Shapefile, GeoPackage & GeoTIFF",
      "Print-ready 300 DPI PDF maps with professional styling",
      "Clean Excel/CSV summary tables with coordinates",
      "2-4 day turnaround with complete methodology documentation",
    ],
    highlighted: false,
    ctaText: "Start Spatial Sprint",
    ctaLink: "#contact",
  },
  {
    id: "pro-geoai",
    name: "Custom AI & Geospatial Pipeline",
    price: "$1,200 - $3,500",
    period: "Fixed Milestone",
    tagline: "For teams needing deep learning object detection, RAG systems, or interactive Web GIS dashboards.",
    features: [
      "Everything in Starter plus:",
      "Custom Deep Learning CV model (YOLOv12 / PyTorch object detection)",
      "LiDAR point cloud processing & Canopy Height Models (CHM)",
      "Enterprise PostGIS spatial database setup with Docker",
      "Interactive Web GIS dashboard (Leaflet / Streamlit / FastAPI)",
      "Or Enterprise RAG copilot with vector search & document grounding",
      "14-21 day turnaround with full source code & Docker deployment",
    ],
    highlighted: true,
    ctaText: "Hire on Upwork / Direct",
    ctaLink: "#contact",
  },
  {
    id: "agency-retainer",
    name: "Dedicated GeoAI Studio Retainer",
    price: "$3,000+",
    period: "Monthly Retainer",
    tagline: "Full-spectrum AI engineering and geospatial intelligence partnership for growing companies.",
    features: [
      "Direct access to both Sharmin (AI) and Rafi (GIS/Remote Sensing)",
      "End-to-end Spatial RAG & conversational GIS development",
      "Ongoing satellite time-series monitoring & automated ETL pipelines",
      "Continuous model training, fine-tuning, and edge optimization",
      "Priority SLA: 12-hour response & bi-weekly sprint deliverables",
      "Private GitHub repository collaboration & weekly sync calls",
    ],
    highlighted: false,
    ctaText: "Book Consultation",
    ctaLink: "#contact",
  },
];

export const TESTIMONIALS = [
  {
    client: "Environmental Consultancy Lead",
    location: "United States",
    rating: 5,
    project: "Riverfront Parcel & Boundary Mapping",
    feedback:
      "Rafi is exceptional. He delivered analysis on over 1,100 parcel boundaries with immaculate precision, structured CSVs, and an interactive web map ahead of schedule. Truly top-tier GIS expertise.",
    source: "Verified Upwork Client (Repeat Hire)",
  },
  {
    client: "Agritech Platform Founder",
    location: "Germany / EU",
    rating: 5,
    project: "Satellite Crop Yield & Disease Detection",
    feedback:
      "The synergy between remote sensing satellite time-series and deep learning computer vision provided insights our internal team had been struggling to obtain for months. Unbeatable speed and scientific rigour.",
    source: "Enterprise Client",
  },
  {
    client: "Telecom Infrastructure Director",
    location: "Germany",
    rating: 5,
    project: "Fibre Network Automated GIS Analysis",
    feedback:
      "Automated geospatial workflows across 20+ cities cut down our rollout assessment time by over 20%. The documentation and reproducible Docker scripts made handoff effortless.",
    source: "Infrastructure Partner",
  },
];
