import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const permanentUrl = "https://idle-town-assets.vercel.app/assets";

await runStep("Build the asset app", "npm", ["run", "build:assets"]);
await runStep("Deploy to Vercel production", "npx", ["vercel", "--prod", "--yes", "--no-color"]);

console.log("");
console.log(`Updated: ${permanentUrl}`);

function runStep(label, command, args) {
  return new Promise((resolveStep, rejectStep) => {
    console.log("");
    console.log(`> ${label}`);
    console.log(`> ${command} ${args.join(" ")}`);

    const child = spawnStep(command, args);

    child.on("error", rejectStep);
    child.on("exit", (code) => {
      if (code === 0) {
        resolveStep();
        return;
      }

      rejectStep(new Error(`${label} failed with exit code ${code ?? "unknown"}.`));
    });
  });
}

function spawnStep(command, args) {
  if (process.platform === "win32") {
    return spawn([command, ...args].map(formatShellArgument).join(" "), {
      cwd: projectRoot,
      shell: true,
      stdio: "inherit"
    });
  }

  return spawn(command, args, {
    cwd: projectRoot,
    stdio: "inherit"
  });
}

function formatShellArgument(value) {
  if (/^[a-zA-Z0-9:./_=-]+$/u.test(value)) {
    return value;
  }

  return `"${value.replaceAll('"', '\\"')}"`;
}
