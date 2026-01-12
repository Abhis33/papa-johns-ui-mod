import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.papajohns.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          accept: '*/*',
          'accept-language': 'en-US,en;q=0.9',
          adrum: 'isAjax:true',
          priority: 'u=1, i',
          referer: 'https://www.papajohns.com/omni/en/menu/pizza',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
          'x-trpc-source': 'nextjs-react',
        },
      },
    },
  },
});
