import { defineConfig } from "vitest/config";

// Keep tests off the real user data dir: vitest.setup.ts points
// TORLINK_STATE_DIR (honored by src/config/paths.ts) at a per-worker temp
// folder before any test module imports paths.ts.
export default defineConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
  },
});
