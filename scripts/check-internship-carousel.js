const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "script.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

const marker = "/* Smooth internship carousel polish */";
const start = css.lastIndexOf(marker);

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exitCode = 1;
  }
}

assert(start !== -1, "missing final smooth carousel override block");

const block = start === -1 ? "" : css.slice(start);

assert(/#education\s+\.internship-viewport\s*{[^}]*overflow-x:\s*auto\s*!important;/s.test(block), "viewport must keep horizontal scrolling enabled");
assert(/#education\s+\.internship-viewport\s*{[^}]*padding:\s*12px\s+14px\s+20px\s*!important;/s.test(block), "viewport must keep safety padding so card borders are not clipped");
assert(/#education\s+\.internship-viewport\s*{[^}]*scroll-padding-inline:\s*14px\s*!important;/s.test(block), "viewport must snap with matching inline padding");
assert(/#education\s+\.internship-carousel\s+\.internship-grid\s*{[^}]*gap:\s*28px\s*!important;/s.test(block), "desktop card gap should match the larger layout");
assert(/#education\s+\.internship-carousel\s+\.internship-card\s*{[^}]*flex:\s*0\s+0\s+calc\(\(100%\s*-\s*56px\)\s*\/\s*3\)\s*!important;/s.test(block), "desktop cards should fill the larger three-card layout");
assert(/#education\s+\.internship-carousel\s+\.company-logo\s*{[^}]*height:\s*128px\s*!important;/s.test(block), "company logo area should be enlarged");
assert(/#education\s+\.internship-carousel\s+\.company-logo\.bluefocus-logo\s+img\s*{[^}]*max-width:\s*330px\s*!important;/s.test(block), "BlueFocus logo should be enlarged");
assert(js.includes('behavior: "smooth"'), "carousel navigation should request smooth scrolling");
assert(html.includes('./styles.css?v=carousel-polish'), "stylesheet link should bust stale browser cache");
assert(html.includes('./script.js?v=carousel-polish'), "script link should bust stale browser cache");

if (!process.exitCode) {
  console.log("Internship carousel checks passed.");
}
