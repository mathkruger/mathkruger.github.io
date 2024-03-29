import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://mathkruger.github.io',
  base: '/',
  integrations: [react({
    experimentalReactChildren: true
  })]
});