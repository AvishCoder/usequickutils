import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { resolve } from "path";

export default defineConfig({
  site: "https://usequickutils.com",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": resolve(fileURLToPath(new URL(".", import.meta.url)), "src"),
      },
    },
  },
});
