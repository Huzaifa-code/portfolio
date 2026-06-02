import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://huzaifaqureshi.me',
  output: 'server',   // SSR by default; use prerender=true per page for SSG
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.cjs',
    }),
    sitemap(),
  ],
  vite: {
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    ssr: {
      noExternal: ['styled-components'],
    },
  },
});
