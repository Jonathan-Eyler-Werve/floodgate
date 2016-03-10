// filters.js

if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

FG.runFilters = function () {

  // stash the system time
  var time = new Date();

  // poll quickly until settings are ready
  if (FG.settings === undefined) {
    window.setTimeout(FG.runFilters, 50);
    return
  };

  // stub for dev
  FG.settings.rules = [];
  var newRule = new Rule ("mute", "pokemonTest", {time: "always", site: "Twitter"});
  FG.settings.rules.push(newRule);
  newRule = new Rule ("mute", "racialSlurs", {time: "always", site: "Twitter"});
  FG.settings.rules.push(newRule);

  // EXAMPLE of FG.settings.rules
  // [ {action: "mute", filter: "filterName", scope: "always"} ]

  // set number of filters so we know which filter is running last
  // used to append comprehensive justification on last pass
  FG.numberOfFilters = 0
  $.each(FG.settings.rules, function (index, rule) {
    if (FG.activeNow(rule.scope.time, time)) {
      FG.numberOfFilters += 1;
    }
  });

  // run filters for each rule
  $.each(FG.settings.rules, function (index, rule) {
    if (FG.activeNow(rule.scope.time, time)) {
      FG.filterTweets(rule.action, FG.allFilters[rule.filter]);
    }
  });

};

// undo filters from entire page so settings changes propegate
FG.refreshFilters = function () {
  if (window.location.hostname === "twitter.com") { window.location.reload() };
}

FG.activeNow = function (scope, time) {
  var hour = time.getHours();

  if (  scope === "always")                                 { return true };
  if ( (scope === "morning") && (hour <= 9) )               { return true };
  if ( (scope === "morningAndEvening") && (hour <= 9) )     { return true };
  if ( (scope === "evening") && (hour >= 7) )               { return true };
  if ( (scope === "morningAndEvening") && (hour >= 7) )     { return true };

  return false
};