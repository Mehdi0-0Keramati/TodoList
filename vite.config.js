import svgr from "vite-plugin-svgr";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/TodoList",
  plugins: [react(), svgr()],
});
