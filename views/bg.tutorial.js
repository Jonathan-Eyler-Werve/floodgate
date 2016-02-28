// tutorial.js

if (window.bg === undefined) { window.bg = {} };
BG = window.bg;

BG.tutorial = function () {
  BG.tutorial.injectLI();
};

BG.tutorial.injectLI = function () {
  var ul = $("#tutorial--filters");
  var activeFilters = BG.settings.activeFilters

  Object.keys(activeFilters).forEach(function (key) {

    ul.append('<li>' + key + '</li>');

    if (activeFilters[key]) {
      // console.log("Running a filter named:", key);
      window.mute.filterTweets(window.mute.allFilters[key]);
    }
  });





  // ul.append('<li>Fooooo</li>');

}





$(function() {
  BG.tutorial()
});








  // var activeFilters = window.mute.settings.activeFilters

  // // set number of filters so we know which filter is running last
  // window.mute.numberOfFilters = 0
  // Object.keys(activeFilters).forEach(function (key) {
  //   if (activeFilters[key]) {
  //     window.mute.numberOfFilters += 1;
  //   }
  // });

  // // run the filters
  // Object.keys(activeFilters).forEach(function (key) {
  //   if (activeFilters[key]) {
  //     // console.log("Running a filter named:", key);
  //     window.mute.filterTweets(window.mute.allFilters[key]);
  //   }
  // });