import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000, // Set the development server to run on port 3000
    open: true, // Optional: Automatically open the app in the browser
  },
})
