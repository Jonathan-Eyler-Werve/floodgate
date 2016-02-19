// tests.js

if (window.mute === undefined) { window.mute = {} };

window.mute.testDelay = function () {
  console.log("--- getUserID.js ---");
  console.log("current userID is", window.mute.getUserID());
  console.log(typeof window.mute.getUserID() === "string");
  console.log(typeof window.mute.getRandomToken() === "string");
  console.log(window.mute.getRandomToken() !== window.mute.getRandomToken());
  console.log(window.mute.getUserID() === window.mute.getUserID());
}

$(function() {

  console.log("=== Tests running ===");

  console.log(true);
  console.log(window.mute.tweetTriggerTextFilter !== undefined);
  console.log(window.mute.imageHide !== undefined);
  console.log(window.mute.addStylesheet !== undefined);
  console.log(window.mute.getUserID !== undefined);
  console.log(window.mute.getRandomToken !== undefined);

  console.log("--- words.js ---");
  console.log(typeof window.mute.allFilters === "object");
  console.log(window.mute.allFilters.racialSlurs[0] === "test-stub-sibmeivmsobmsovnwodskfwdkvob");

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

  // console.log(".imageHide()");
  // window.mute.imageHide($(".tweet, .stream-item-content"));

  window.setTimeout(window.mute.testDelay, 2000);

});