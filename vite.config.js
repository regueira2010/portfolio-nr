import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    // Compresión Gzip (por defecto)
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Compresión Brotli
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    // Optimización de imágenes en build
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'sortAttrs', active: true }
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons', 'react-intersection-observer']
  }
})