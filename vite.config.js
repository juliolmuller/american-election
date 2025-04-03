import react from '@vitejs/plugin-react-swc';
import rollupAnalyze from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        rollupAnalyze({
          summaryOnly: true,
          limit: 10,
        }),
      ],
    },
  },
  plugins: [react()],
});
