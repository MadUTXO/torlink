import os from "node:os";
import path from "node:path";

// Give every vitest worker its own state dir. Suites that legitimately touch
// persisted state (queue / history / seeds / boot marker) then cannot race on
// one shared temp folder when files run in parallel.
const workerId =
  process.env.VITEST_POOL_ID ?? process.env.VITEST_WORKER_ID ?? String(process.pid);

process.env.TORLINK_STATE_DIR = path.join(os.tmpdir(), `torlink-test-state-${workerId}`);
