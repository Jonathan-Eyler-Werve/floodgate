// tests.js

if (window.mute === undefined) { window.mute = {} };

$(function() {

console.log("=== Tests running ===");

console.log(true);
console.log(window.mute.tweetTriggerTextFilter !== undefined);
console.log(window.mute.imageHide !== undefined);
console.log(window.mute.triggerWords !== undefined);
console.log(window.mute.addStylesheet !== undefined);

console.log("--- imageHide.js ---");
var stub = $("body");
console.log(".getImages()");
console.log( window.mute.imageHide.getImages(stub) instanceof jQuery);
console.log( window.mute.imageHide.getImages(stub).length > 0 ); // page dependency
console.log(".getElements()");
console.log( window.mute.imageHide.getElements(stub) instanceof jQuery);
console.log( window.mute.imageHide.getElements(stub).length > 0 ); // page dependency
console.log(".getHeight()");
console.log( typeof window.mute.imageHide.getHeight($("img")[0]) === "number");

console.log(".imageHide()");
// window.mute.imageHide($(".tweet, .stream-item-content"));

});