// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender all routes so the output is a fully static site (plain HTML/CSS/JS
    // ready to upload to any hosting — no Node/Workers runtime needed).
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [{ path: "/", prerender: { enabled: true, crawlLinks: true } }],
  },
  // Outside the Lovable cloud build, output a static site instead of a Cloudflare
  // Worker bundle. The `static` preset writes the prerendered HTML + client assets
  // straight into `dist/` so the folder can be uploaded to any static host as-is.
  nitro: { preset: "static" },
});
