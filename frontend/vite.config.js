import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   include: ["sheetjs-style"],
  // },
  // build: {
  //   commonjsOptions: {
  //     include: [/sheetjs-style/, /node_modules/],
  //   },
  // },
});
