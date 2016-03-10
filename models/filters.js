// filters.js

if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

FG.runFilters = function () {

  // poll quickly until settings are ready
  if (FG.settings === undefined) {
    window.setTimeout(FG.runFilters, 50);
    console.log("Fast polling until chrome.storage responds");
    return
  };

  // start tutorial if user state is not initialized
  if (FG.settings.initialized === false) {
    FG.launchSettingsPage();
    return
  }

  // synced settings.activeFilters has {key: boolean}, the local FG.allFilters has {key: array}
  // keys are the same

  var activeFilters = FG.settings.activeFilters

  // set number of filters so we know which filter is running last
  FG.numberOfFilters = 0
  Object.keys(activeFilters).forEach(function (key) {
    if (activeFilters[key]) {
      FG.numberOfFilters += 1;
    }
  });

  // run the filters
  Object.keys(activeFilters).forEach(function (key) {
    if (activeFilters[key]) {
      // console.log("Running a filter named:", key);
      FG.filterTweets(FG.allFilters[key]);
    }
  });

};

// undo filters from entire page so settings changes propegate
FG.refreshFilters = function () {

  if (window.location.hostname === "twitter.com") { window.location.reload() };

}