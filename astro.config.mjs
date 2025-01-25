import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8080
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), mdx()],
  site: 'https://serenefields.com',
  trailingSlash: 'never',
  output: 'static',
});
