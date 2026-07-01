const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "script.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exitCode = 1;
  }
}

const combined = `${html}\n${css}\n${js}`;

assert(!combined.includes("workbench"), "final site should not include workbench code or styles");
assert(!combined.includes("data-edit-key"), "final site should not expose editable workbench fields");
assert(!combined.includes("data-edit-type"), "final site should not expose editable workbench field types");
assert(!html.includes('id="workbenchToggle"'), "workbench floating button should be removed");
assert(!html.includes('id="workbenchPanel"'), "workbench panel should be removed");
assert(!js.includes("initWorkbench"), "workbench initializer should be removed");
assert(html.includes('./styles.css?v=logo-compact'), "stylesheet cache-busting version should reflect the finalized logo update");
assert(html.includes('./script.js?v=logo-compact'), "script cache-busting version should reflect the finalized logo update");

if (!process.exitCode) {
  console.log("Finalized site checks passed.");
}
