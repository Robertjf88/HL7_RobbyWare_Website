import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This must match your repository name exactly
  base: '/HL7_RobbyWare_Website/', 
  build: {
    outDir: 'dist',
  }
})