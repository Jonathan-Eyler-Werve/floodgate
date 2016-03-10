// filters.js

if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

FG.runFilters = function () {

  // stash the system time
  var time = new Date();
  var hour = time.getHours();

  // poll quickly until settings are ready
  if (FG.settings === undefined) {
    window.setTimeout(FG.runFilters, 50);
    return
  };

  // synced settings.activeFilters has {key: boolean}, the local FG.allFilters has {key: array}
  // keys are the same
  var activeFilters = FG.settings.activeFilters

  // stub for dev
  console.log(FG.settings.rules);
  FG.settings.rules = [];
  var newRule = new Rule ("always", "pokemon", "mute");
  FG.settings.rules.push(newRule);
  console.log(FG.settings.rules);

  // EXAMPLE FG.settings.rules
  // [ {action: "mute", filter: "filterName", scope: "always"} ]

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