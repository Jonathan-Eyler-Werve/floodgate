//background-tests.js

if (window.bg === undefined) { window.bg = {} };

$(function() {

  console.log("=== Background Tests running ===");
  console.log(Object.keys(window.bg).length > 0);
  console.log(window.bg.tutorial !== undefined);
  console.log("");

});