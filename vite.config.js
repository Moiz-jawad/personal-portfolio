import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/personal-portfolio/",
  server: {
    host: true, // exposes dev server to local network
    port: 5173,
  },
});
