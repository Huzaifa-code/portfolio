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
      holdUntilCrawlEnd: true,
      include: [
        '@behold/react',
        '@motionone/animation',
        '@motionone/dom',
        '@motionone/types',
        '@motionone/utils',
        '@sanity/block-content-to-react',
        '@sanity/client',
        '@splidejs/react-splide',
        '@splidejs/splide-extension-auto-scroll',
        'aos',
        'emailjs-com',
        'framer-motion',
        'hamburger-react',
        'react-hook-form',
        'react-icons/ai',
        'react-icons/bi',
        'react-icons/bs',
        'react-icons/cg',
        'react-icons/ci',
        'react-icons/di',
        'react-icons/fa',
        'react-icons/fa6',
        'react-icons/fc',
        'react-icons/fi',
        'react-icons/gi',
        'react-icons/go',
        'react-icons/gr',
        'react-icons/hi',
        'react-icons/hi2',
        'react-icons/im',
        'react-icons/io',
        'react-icons/io5',
        'react-icons/lia',
        'react-icons/lu',
        'react-icons/md',
        'react-icons/pi',
        'react-icons/rx',
        'react-icons/si',
        'react-icons/sl',
        'react-icons/tb',
        'react-icons/tfi',
        'react-icons/ti',
        'react-icons/vsc',
        'react-icons/wi',
        'react-scroll',
        'react-snowfall',
        'styled-components',
        'sweetalert2'
      ],
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
