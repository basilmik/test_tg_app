import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [solid(), basicSsl()],
    build: {
      outDir: './docs'
    },
  base: './'
});