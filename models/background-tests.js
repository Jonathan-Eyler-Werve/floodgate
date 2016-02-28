//background-tests.js

if (window.mute === undefined) { window.mute = {} };
if (window.mute.bg === undefined) { window.mute.bg = {} };



$(function() {

  console.log("=== Background Tests running ===");
  console.log(Object.keys(window.mute.bg).length > 0);
  console.log(window.mute.bg.tutorial !== undefined);

});