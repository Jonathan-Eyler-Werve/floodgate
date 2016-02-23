// settingsPage.js

if (window.mute === undefined) { window.mute = {} };

window.mute.getSettings = function () {

  if (window.mute.settings === undefined) { window.mute.settings = {} };

  // window.mute.settings.activeFilters
  // check if we have settings applied locally
    // if yes, set settings
  // check if we have settings applied in chrome.storage
    // if yes, set settings
    // if no, run splash page


  window.mute.settings.activeFilters = {
    racialSlurs: true,
    queerSlurs: true,
    triggerWarning: true,
    aggressionWords: true,
    sexCrimeWords: true
  }

  console.log("current settings:")
  console.log(window.mute.settings);

};