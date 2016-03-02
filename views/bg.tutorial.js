// tutorial.js

if (window.bg === undefined) { window.bg = {} };
BG = window.bg;

BG.tutorialInitialize = function () {

  if (BG.settings) {

    if (BG.settings.initialized) {

      $("#tutorial--text").replaceWith(BG.textSettings);
      if (BG.settings.activeFilters.triggerWarning) { $("input#triggerWarning").prop('checked', true); };
      if (BG.settings.activeFilters.racialSlurs) { $("input#racialSlurs").prop('checked', true); };
      if (BG.settings.activeFilters.queerSlurs) { $("input#queerSlurs").prop('checked', true); };
      if (BG.settings.activeFilters.aggressionWords) { $("input#aggressionWords").prop('checked', true); };
      if (BG.settings.activeFilters.sexCrimeWords) { $("input#sexCrimeWords").prop('checked', true); };

      // check all the checkboxes on page based on settings data

    } else {
      $("#tutorial--text").replaceWith(BG.textTutorialStart);
      BG.settings.activeFilters.triggerWarning = false;
      BG.settings.activeFilters.racialSlurs = false;
      BG.settings.activeFilters.queerSlurs = false;
      BG.settings.activeFilters.aggressionWords = false;
      BG.settings.activeFilters.sexCrimeWords = false;
      $(".settings__footer button").show()
    };

  } else {
    setTimeout(BG.tutorialInitialize, 250);
  }
}

BG.closeButtons = function () {
  $(".btn--close-page").click(function() {
    close();
  });
}

BG.tutorialButtons = function () {

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

  $("#btn--done").click(function() {
    BG.settings.initialized = true;
    $("#tutorial--text").replaceWith(BG.textTutorialConfirm);
    $(".settings__footer button").hide();

  });

}

BG.textTutorialConfirm = `
  <div id="tutorial--text">
    <h3>You're set up</h3>
    <p>Floodgate will wrap things on Twitter based on your selections here. Hover over them to see what's inside.</p>
    <p>You can turn filters on and off any time. To get to this page, click the Floodgate icon on the top right of your browser.</p>
  </div>
`
BG.textSettings = `
  <div id="tutorial--text">
    <h3>Settings</h3>
    <p>Floodgate will wrap content on Twitter based on your choices here.</p>
  </div>
`
BG.textTutorialStart = `
  <div id="tutorial--text">
    <h3>Let's get set up</h3>
    <p>Floodgate lets you set rules for your media intake, starting with Twitter.</p>
    <p>Pick some things you'd like help with from the list.</p>
  </div>
`

$(function() {
  BG.getSettings();
  $(".settings__footer button").hide();
  BG.tutorialInitialize();
  BG.closeButtons();
  BG.tutorialButtons();
  setInterval(BG.setSettings, 500);
});



