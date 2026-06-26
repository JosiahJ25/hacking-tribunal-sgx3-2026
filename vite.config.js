import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/hacking-tribunal-sgx3-2026/",
  plugins: [react()],
})
