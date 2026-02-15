/**
 * Build script for the HTML5 version:
 * - Reads script.source.js (readable source)
 * - Obfuscates it with javascript-obfuscator
 * - Injects the result into index.template.html
 * - Writes index.html
 *
 * Run: node build-html5.js   or  npm run build:html5
 */

const fs = require("fs");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");

const root = __dirname;
const sourcePath = path.join(root, "script.source.js");
const templatePath = path.join(root, "index.template.html");
const outputPath = path.join(root, "index.html");
const placeholder = "__OBFUSCATED_SCRIPT__";

const source = fs.readFileSync(sourcePath, "utf8");
const template = fs.readFileSync(templatePath, "utf8");

const obfuscated = JavaScriptObfuscator.obfuscate(source, {
  compact: true,
  controlFlowFlattening: false,
  renameGlobals: false,
  stringArray: true,
  stringArrayEncoding: ["none"],
}).getObfuscatedCode();

if (!template.includes(placeholder)) {
  console.error("Template does not contain placeholder:", placeholder);
  process.exit(1);
}

const html = template.replace(placeholder, obfuscated);
fs.writeFileSync(outputPath, html, "utf8");
console.log("Built index.html from script.source.js and index.template.html");
