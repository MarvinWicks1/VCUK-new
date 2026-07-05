import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://vcukwebservices.co.uk",
  adapter: vercel(),
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" }
});
