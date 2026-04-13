import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4000,
    strictPort: false,
    allowedHosts: ['mkc-dev.intra.dle.dev']
  },
  preview: {
    port: 4000
  },
  plugins: [enhancedImages(), tailwindcss(), sveltekit()]
});
