import type { NextConfig } from "next";

// Use environment variable for mount path, defaults to empty string for local dev
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: basePath,
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
