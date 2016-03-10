// rules.js

if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

function Rule (action, filter, scope) {
  // takes a scope object { site: "twitter", time: "always" }
  this.scope = scope;
  // take a string of a filter name - see words.js
  this.filter = filter;
  // takes a sting of action name - "mute", "hide", "kittens"
  this.action = action;
}
