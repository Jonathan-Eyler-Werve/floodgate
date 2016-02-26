// filters.js

if (window.mute === undefined) { window.mute = {} };

window.mute.runFilters = function () {

  // poll quickly until settings are initialized
  if (window.mute.settings === undefined) {
    window.setTimeout(window.mute.runFilters, 50);
    console.log("Fast polling until chrome.storage responds");
    return
  };

  if (window.mute.settings.initialized === false) {
    console.log("running launchSettingsPage")
    window.mute.launchSettingsPage();
    return
  }

  // synced settings.activeFilters has {key: boolean}, the local .allFilters has {key: array}
  // keys are the same

  var activeFilters = window.mute.settings.activeFilters

  // set number of filters so we know which filter is running last
  window.mute.numberOfFilters = 0
  Object.keys(activeFilters).forEach(function (key) {
    if (activeFilters[key]) {
      window.mute.numberOfFilters += 1;
    }
  });

  // run the filters
  Object.keys(activeFilters).forEach(function (key) {
    if (activeFilters[key]) {
      // console.log("Running a filter named:", key);
      window.mute.filterTweets(window.mute.allFilters[key]);
    }
  });

};