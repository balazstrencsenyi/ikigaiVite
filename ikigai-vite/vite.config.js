import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct file paths in Electron
  build: {
    outDir: "dist",
    assetsDir: "assets", // Keeps assets organized
  },
});
