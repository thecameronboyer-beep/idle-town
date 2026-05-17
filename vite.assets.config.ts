import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    cssTarget: "chrome61",
    rollupOptions: {
      input: {
        assets: resolve(projectRoot, "assets.html")
      }
    }
  }
});
