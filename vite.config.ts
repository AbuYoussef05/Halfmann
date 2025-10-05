import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Replit-Plugins nur im Dev-Modus laden
async function devPlugins() {
  const plugins = [];
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { default: runtimeErrorOverlay } = await import("@replit/vite-plugin-runtime-error-modal");
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    const { devBanner } = await import("@replit/vite-plugin-dev-banner");
    plugins.push(runtimeErrorOverlay(), cartographer(), devBanner());
  }
  return plugins;
}

export default defineConfig(async () => ({
  plugins: [
    react(),
    ...(await devPlugins()),
  ],
  // *** WICHTIG für GitHub Pages ***
  // Repo-Name exakt mit führendem/abschließendem Slash
  base: "/Halfmann/",
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // Projekt-Root ist der client-Ordner
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // Output bleibt wie bei dir: dist/public im Repo-Root
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: { strict: true, deny: ["**/.*"] },
  },
}));
