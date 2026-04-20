// Forces `next dev --webpack` (default port 3001 unless you pass -p/--port).
// Do NOT delete `.next/dev` on every start — Next needs middleware/routes manifests
// there immediately; wiping it causes 500s until a race resolves.
// For Turbopack/webpack chunk mismatches, run: npm run dev:clean
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const forwarded = process.argv.slice(2);
const hasCustomPort = forwarded.includes("-p") || forwarded.includes("--port");
const resolvedArgs = hasCustomPort ? forwarded : ["--port", "3001", ...forwarded];

// If a previous dev crashed, a stale lock can block startup — remove only the lock.
try {
  fs.unlinkSync(path.join(root, ".next", "dev", "lock"));
} catch {
  // no lock or path missing
}

const child = spawn(
  process.execPath,
  [nextCli, "dev", "--webpack", ...resolvedArgs],
  { stdio: "inherit", cwd: root, env: process.env }
);

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code == null ? 1 : code);
});
