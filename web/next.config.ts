import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Avoid picking up C:\Users\Mekari\package-lock.json as workspace root
  outputFileTracingRoot: root,
};

export default nextConfig;
