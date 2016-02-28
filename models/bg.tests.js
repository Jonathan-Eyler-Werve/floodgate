//background-tests.js

if (window.bg === undefined) { window.bg = {} };
BG = window.bg;

$(function() {

  console.log("=== Background Tests running ===");
  console.log(Object.keys(window.bg).length > 0);
  console.log(window.bg.tutorial !== undefined);
  console.log(BG.tutorial.injectLI !== undefined);
  console.log(window.bg.setSettings !== undefined);
  console.log(window.bg.getSettings !== undefined);
  console.log(BG === window.bg);
  console.log("");

});