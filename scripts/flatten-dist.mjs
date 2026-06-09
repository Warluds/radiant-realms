// Postbuild: flatten dist/ so the folder is upload-ready for any static host.
// Moves dist/client/* -> dist/, removes dist/server/, renames _shell.html
// to index.html, and copies it to 404.html for SPA fallback routing.
import { existsSync, renameSync, rmSync, readdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const client = join(dist, "client");
const server = join(dist, "server");

if (existsSync(client)) {
  for (const entry of readdirSync(client)) {
    renameSync(join(client, entry), join(dist, entry));
  }
  rmSync(client, { recursive: true, force: true });
}
if (existsSync(server)) rmSync(server, { recursive: true, force: true });

const shell = join(dist, "_shell.html");
const index = join(dist, "index.html");
if (existsSync(shell)) {
  renameSync(shell, index);
}
if (existsSync(index)) {
  copyFileSync(index, join(dist, "404.html"));
}

console.log("[postbuild] dist/ flattened — ready to upload.");
