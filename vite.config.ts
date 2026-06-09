// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Build the app as a pure SPA so `dist/` contains a static index.html
    // plus client assets — ready to upload to any static host.
    spa: { enabled: true },
  },
  // Skip the nitro/worker build entirely when running locally; we only want
  // the static SPA output.
  nitro: false,
  vite: {
    build: { outDir: "dist" },
  },
});
