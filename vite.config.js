import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// BASE_PATH is set by the GitHub Pages workflow (e.g. "/bthere.online/").
// Locally and on Vercel it falls back to "/".
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
});
