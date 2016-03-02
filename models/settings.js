// settingsPage.js

if (window.mute === undefined) { window.mute = {} };

window.mute.getSettings = function () {
  chrome.storage.sync.get('settings', function(items) {

    if (items.settings) {
      // store the sync object on window
      window.mute.settings = items.settings;
      // message the settings object to the background scripts
      chrome.runtime.sendMessage({"settings": window.mute.settings});
      // copy values to test for 'dirty' sync state
      window.mute.initialSettings = JSON.parse(JSON.stringify(items.settings));
      console.log("Settings gotten:", window.mute.settings);
    } else {
      // initalize the settings object
      window.mute.settings = {};
      window.mute.settings.initialized = false;
      window.mute.settings.activeFilters = {};
      chrome.storage.sync.set({settings: window.mute.settings}, function() {
        console.log("I synced these settings from .getSettings");
        console.log(window.mute.settings)
      });
    };

  });
};

window.mute.launchTutorial = function () {
  if (window.mute.settings) {

    if (window.mute.settings.initialized === false) {
      chrome.runtime.sendMessage({"pageAction": "tutorial"});
    };

  } else {

    setTimeout(window.mute.launchTutorial, 250);

  };
};

window.mute.setSettings = function () {

  if ( JSON.stringify(BG.settings) !== JSON.stringify(BG.initialSettings) ) {
    chrome.storage.sync.set({settings: window.mute.settings}, function() {
      window.mute.getSettings();
    });
  }
};