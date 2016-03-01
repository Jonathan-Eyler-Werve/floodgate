// tutorial.js

if (window.bg === undefined) { window.bg = {} };
BG = window.bg;

BG.tutorialInitialize = function () {

  if (BG.settings) {
    BG.settings.activeFilters.triggerWarning = false;
    BG.settings.activeFilters.racialSlurs = false;
    BG.settings.activeFilters.queerSlurs = false;
    BG.settings.activeFilters.aggressionWords = false;
    BG.settings.activeFilters.sexCrimeWords = false;
    BG.settings.activeFilters.peopleMisogyny = false;
    BG.settings.activeFilters.peopleWhiteSupremicist = false;
  } else {
    setTimeout(BG.tutorialInitialize, 250);
  }
}

BG.closeButton = function () {
  $(".btn--close-page").click(function() {
    close();
  });
}

BG.tutorialButton = function () {

  $("input#triggerWarning").click(function() {
    BG.settings.activeFilters.triggerWarning = !(BG.settings.activeFilters.triggerWarning);
  });

  $("input#racialSlurs").click(function() {
    BG.settings.activeFilters.racialSlurs = !(BG.settings.activeFilters.racialSlurs);
  });

  $("input#queerSlurs").click(function() {
    BG.settings.activeFilters.queerSlurs = !(BG.settings.activeFilters.queerSlurs);
  });

  $("input#aggressionWords").click(function() {
    BG.settings.activeFilters.aggressionWords = !(BG.settings.activeFilters.aggressionWords);
  });

  $("input#sexCrimeWords").click(function() {
    BG.settings.activeFilters.sexCrimeWords = !(BG.settings.activeFilters.sexCrimeWords);
  });

  $("input#peopleMisogyny").click(function() {
    BG.settings.activeFilters.peopleMisogyny = !(BG.settings.activeFilters.peopleMisogyny);
  });

  $("input#peopleWhiteSupremicist").click(function() {
    BG.settings.activeFilters.peopleWhiteSupremicist = !(BG.settings.activeFilters.peopleWhiteSupremicist);
  });

}

$(function() {
  BG.getSettings();
  BG.tutorialInitialize();
  BG.closeButton();
  BG.tutorialButton();
  setInterval(BG.setSettings, 1000);
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