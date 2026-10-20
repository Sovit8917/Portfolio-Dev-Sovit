import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to your real domain (needed for sitemap + social previews)
export default defineConfig({
  site: 'https://yourname.dev',
  integrations: [sitemap()],
});
