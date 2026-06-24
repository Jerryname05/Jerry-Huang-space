const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "script.js"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exitCode = 1;
  }
}

const editableKeys = [...html.matchAll(/data-edit-key="/g)].length;

assert(html.includes('id="workbenchToggle"'), "page needs a floating workbench toggle");
assert(html.includes('id="workbenchPanel"'), "page needs a workbench panel");
assert(html.includes('id="workbenchField"'), "workbench needs a field selector");
assert(editableKeys >= 24, "page should expose enough editable text and image fields");
assert(html.includes('data-edit-key="internship.bluefocus.logo"'), "BlueFocus logo should be editable");
assert(html.includes('data-edit-key="internship.bluefocus.description"'), "BlueFocus description should be editable");
assert(html.includes('data-edit-key="hero.intro"'), "hero intro should be editable");
assert(html.includes('data-edit-key="contact.wechatQr"'), "contact QR image should be editable");

assert(js.includes("const WORKBENCH_STORAGE_KEY"), "workbench should persist edits in localStorage");
assert(js.includes("function initWorkbench()"), "workbench initializer is missing");
assert(js.includes("function applyWorkbenchValue"), "workbench should apply edits to DOM");
assert(js.includes("function getWorkbenchImageScale"), "workbench should read image scale");
assert(js.includes("function applyWorkbenchImageScale"), "workbench should apply image scale");
assert(js.includes("workbenchScaleInput"), "image fields should render a scale slider");
assert(js.includes("workbenchScaleMinus"), "image fields should render a shrink button");
assert(js.includes("workbenchScalePlus"), "image fields should render an enlarge button");
assert(js.includes("function exportWorkbenchOverrides"), "workbench should expose current overrides");
assert(js.includes("initWorkbench();"), "workbench should initialize on load");

assert(css.includes(".workbench-fab"), "workbench floating button styles are missing");
assert(css.includes(".workbench-panel"), "workbench panel styles are missing");
assert(css.includes(".workbench-highlight"), "workbench focus highlight is missing");
assert(css.includes(".workbench-scale-row"), "image scale controls are missing");
assert(css.includes(".workbench-stepper"), "image stepper button styles are missing");

if (!process.exitCode) {
  console.log("Workbench checks passed.");
}
