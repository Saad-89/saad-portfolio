import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/saad-portfolio/',  // Replace with your actual repository name
  build: {
    outDir: 'dist',
  }
})