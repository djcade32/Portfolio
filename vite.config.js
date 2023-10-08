import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    input: {
      main: resolve(root, "index.html"),
      success: resolve(root, "pages", "success", "index.html"),
    },
  },
});
