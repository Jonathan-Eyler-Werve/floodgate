// settingsPage.js

if (window.mute === undefined) { window.mute = {} };

window.mute.getSettings = function () {
  if (window.mute.settings === undefined) {
    chrome.storage.sync.get('settings', function(items) {

      if (items.settings) {
        // store the sync object on window
        console.log("I found an item.settings in the sync")
        window.mute.settings = items.settings;

        // used to test for 'dirty' sync state
        window.mute.remoteSettings = items.settings;
        console.log(window.mute.settings);
      } else {
        // initalize the settings object
        window.mute.settings = {};
        window.mute.settings.initialized = false;
        window.mute.settings.activeFilters = {
          racialSlurs: false,
          queerSlurs: false,
          triggerWarning: false,
          aggressionWords: false,
          sexCrimeWords: false
        };
        chrome.storage.sync.set({settings: window.mute.settings}, function() {
          console.log("I synced these settings from .getSettings");
          console.log(window.mute.settings)
        });

      };
    });

 };
};

window.mute.launchSettingsPage = function () {

  if (window.mute.settings.initialized === false) {
    // open the tutorial page
  } else {
    // open the modal in default page
  }

  // hardcoded for testing
  window.mute.settings.initialized = true;
  window.mute.settings.activeFilters = {
    racialSlurs: true,
    queerSlurs: true,
    triggerWarning: true,
    aggressionWords: true,
    sexCrimeWords: true
  };

  window.mute.setSettings();
};

window.mute.setSettings = function () {

  if (window.mute.settings !== window.mute.remoteSettings) {
    chrome.storage.sync.set({settings: window.mute.settings}, function() {
      window.mute.getSettings();
    });
  }
};