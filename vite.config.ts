import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": "http://localhost:4523/m1/2093261-0-default"
    }
  }
})


/**
 * http://127.0.0.1:5173/api/login
 * 
 * http://127.0.0.1:4523/m1/2093261-0-default/api/login
 */