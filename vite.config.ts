import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        app: resolve(projectRoot, "index.html"),
        characterCreator: resolve(projectRoot, "character-creator.html"),
        designMode: resolve(projectRoot, "design-mode.html")
      }
    }
  }
});
