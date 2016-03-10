// tests.js

if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

FG.testDelay = function () {
  console.log("--- getUserID.js ---");
  // console.log("current userID is", FG.getUserID());
  console.log(typeof FG.getUserID() === "string");
  console.log(typeof FG.getRandomToken() === "string");
  console.log(FG.getRandomToken() !== FG.getRandomToken());
  console.log(FG.getUserID() === FG.getUserID());
}

$(function() {

  console.log("=== Tests running ===");

  console.log(FG.filterTweets !== undefined);
  console.log(FG.imageHide !== undefined);
  console.log(FG.addStylesheet !== undefined);
  console.log(FG.getUserID !== undefined);
  console.log(FG.getRandomToken !== undefined);
  console.log(FG.setSettings !== undefined);

  console.log("--- filters.js ---");
  var time = new Date('December 25, 1995 23:15:30');
  console.log(FG.activeNow("always", time) === true);
  console.log(FG.activeNow("evening", time) === true);
  console.log(FG.activeNow("morning", time) === false);
  console.log(FG.activeNow("never", time) === false);

  console.log("--- words.js ---");
  console.log(typeof FG.allFilters === "object");
  console.log(FG.allFilters.racialSlurs[0] === "test-stub-sibmeivmsobmsovnwodskfwdkvob");

  console.log("--- imageHide.js ---");
  var stub = $("body");
  console.log(".getImages()");
  console.log( FG.imageHide.getImages(stub) instanceof jQuery);
  console.log( FG.imageHide.getImages(stub).length > 0 ); // page dependency
  console.log(".getElements()");
  console.log( FG.imageHide.getElements(stub) instanceof jQuery);
  console.log( FG.imageHide.getElements(stub).length > 0 ); // page dependency
  console.log(".getHeight()");
  console.log( typeof FG.imageHide.getHeight($("img")[0]) === "number");

  // console.log(".imageHide()");
  // FG.imageHide($(".tweet, .stream-item-content"));

  window.setTimeout(FG.testDelay, 2000);

});