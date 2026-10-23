// Pixel size of each product image, so frames match the image and never crop it.
export const IMAGE_SIZES: Record<string, [number, number]> = {
  "/images/offerings/face-recognition.webp": [
    1442,
    1204
  ],
  "/images/offerings/virtual-try-on.webp": [
    1184,
    1428
  ],
  "/images/products/ai-voice-receptionist/call_interaction_natural.jpg": [
    1376,
    768
  ],
  "/images/products/ai-voice-receptionist/hero_natural.jpg": [
    1200,
    896
  ],
  "/images/products/ai-voice-receptionist/macro_natural.jpg": [
    1376,
    768
  ],
  "/images/products/ai-voice-receptionist/workplace_natural.jpg": [
    1376,
    768
  ],
  "/images/products/business-knowledge-assistant/exploded.jpg": [
    1376,
    768
  ],
  "/images/products/business-knowledge-assistant/hero.jpg": [
    1200,
    896
  ],
  "/images/products/business-knowledge-assistant/lifestyle.jpg": [
    1376,
    768
  ],
  "/images/products/business-knowledge-assistant/macro.jpg": [
    1376,
    768
  ],
  "/images/products/face-recognition/hero.jpg": [
    1200,
    896
  ],
  "/images/products/face-recognition/macro.jpg": [
    1376,
    768
  ],
  "/images/products/virtual-try-on/exploded.jpg": [
    1376,
    768
  ],
  "/images/products/virtual-try-on/lifestyle.jpg": [
    1376,
    768
  ],
  "/images/products/virtual-try-on/macro.jpg": [
    1376,
    768
  ],
  "/images/satellite_detected.jpg": [
    1376,
    768
  ],
  "/images/tree_crown.jpg": [
    1376,
    768
  ],
  "/images/works/acisvs_field_officer.png": [
    1086,
    1448
  ],
  "/images/works/aura/catalog.jpg": [
    2000,
    1040
  ],
  "/images/works/aura/delivery-gate.jpg": [
    2000,
    1050
  ],
  "/images/works/aura/home-hero-wide.jpg": [
    1867,
    1050
  ],
  "/images/works/aura/home-hero.jpg": [
    2000,
    1050
  ],
  "/images/works/aura/product-view.jpg": [
    2000,
    1045
  ],
  "/images/works/lidar_rooftop_solar_pv.jpg": [
    1272,
    1072
  ],
  "/images/works/taif_flood_probability.jpg": [
    1600,
    814
  ],
  "/images/works/tree_detection_5610.jpg": [
    1265,
    1072
  ]
};

export const imageRatio = (src: string) => {
  const [w, h] = IMAGE_SIZES[src] ?? [16, 9];
  return `${w} / ${h}`;
};
