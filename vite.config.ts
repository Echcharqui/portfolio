import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true, // listen on 0.0.0.0
    port: 5173,
    strictPort: true // fail if 5173 is taken (optional)
    // hmr: { protocol: 'ws' } // usually not needed; uncomment if proxies cause issues
  }
});
