import { defineConfig } from "vite";
import path from "path";
import react from '@vitejs/plugin-react';  // <-- هذا مهم

// Server build configuration
export default defineConfig({
  base:'/Cp_Training/',
  plugins: [react()],
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, 'client'),
        path.resolve(__dirname, 'shared'),
        path.resolve(__dirname), // <-- يسمح بمجلد المشروع كله
      ]
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "server/node-build.ts"),
      name: "server",
      fileName: "production",
      formats: ["es"],
    },
    outDir: "dist/server",
    target: "node22",
    ssr: true,
    rollupOptions: {
      external: [
        // Node.js built-ins
        "fs",
        "path",
        "url",
        "http",
        "https",
        "os",
        "crypto",
        "stream",
        "util",
        "events",
        "buffer",
        "querystring",
        "child_process",
        // External dependencies that should not be bundled
        "express",
        "cors",
      ],
      output: {
        format: "es",
        entryFileNames: "[name].mjs",
      },
    },
    minify: false, // Keep readable for debugging
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
