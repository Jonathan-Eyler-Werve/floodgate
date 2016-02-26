// settingsPage.js

if (window.mute === undefined) { window.mute = {} };

window.mute.getSettings = function () {

  if (window.mute.settings === undefined) {

    chrome.storage.sync.get('settings', function(items) {

      if (items.settings) {
        // store the sync object on window
        console.log("I found an item.settings in the sync")
        window.mute.settings = items.settings;
      } else {
        // initalize the settings object
        window.mute.settings = {};

        window.mute.settings.activeFilters = {
            racialSlurs: false,
            queerSlurs: false,
            triggerWarning: false,
            aggressionWords: false,
            sexCrimeWords: false
          }

        window.mute.settings.initialized = false;

        chrome.storage.sync.set({settings: window.mute.settings}, function() {
          console.log("I synced these settings from .getSettings");
          console.log(window.mute.settings)
        });

      };

    });
 };

  // console.log("current settings:")
  // console.log(window.mute.settings);

};


window.mute.getSettings.modal = function () {

//  TO DO, make this an actual modal with tickboxes and whatnot

// set these values remotely

  chrome.storage.sync.set({settings: window.mute.settings}, function() {
    console.log("I synced these from getSettings.modal");
    console.log(window.mute.settings)
  });
};
