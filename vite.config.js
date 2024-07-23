import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
<<<<<<< HEAD
      external: ['@google/generative-ai'], // Externalize the module
    },
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4173,
  },
  base: '/', // Ensure base path is correctly set
});
=======
      external: ['@google/generative-ai'], // Add this line to externalize the module
    },
  },
});
>>>>>>> 043c9d1e48c93449284b1a55b2934d07874a966d
