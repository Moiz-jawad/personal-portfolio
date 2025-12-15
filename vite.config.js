import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // exposes network
    port: 5173, // optional, default is 5173
  },
  build: {
    outDir: "build", // if you set it like this, use 'build' instead of 'dist'
  },
});
