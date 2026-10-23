import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "public", "images", "offerings");
const EXTS = ["webp", "jpg", "jpeg", "png", "avif"];

/** Returns the public URL of public/images/offerings/<slug>.<ext> if the file exists. */
export function offeringImage(slug: string): string | null {
  for (const ext of EXTS) {
    if (fs.existsSync(path.join(DIR, `${slug}.${ext}`))) return `/images/offerings/${slug}.${ext}`;
  }
  return null;
}
