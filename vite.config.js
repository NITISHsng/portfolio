import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  assetsInclude: ['**/*.glb'],
  server: {
    host: '0.0.0.0', 
    port: 5173,   
  }    
})
