// settingsPage.js

if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

FG.getSettings = function () {
  chrome.storage.sync.get('settings', function(items) {

    if (items.settings) {
      // store the sync object on window
      FG.settings = items.settings;
      // message the settings object to the background scripts
      chrome.runtime.sendMessage({"settings": FG.settings});
      // copy values to test for 'dirty' sync state
      FG.initialSettings = JSON.parse(JSON.stringify(items.settings));
      console.log("Settings gotten:", FG.settings);
    } else {

      // initalize the settings object
      FG.settings = {};
      FG.settings.initialized = false;
      FG.settings.activeFilters = {};
      FG.settings.rules = [];

      chrome.storage.sync.set({settings: FG.settings}, function() {
        console.log("I synced these settings from .getSettings");
        console.log(FG.settings)
      });
    };

  });
};

FG.launchTutorial = function () {
  if (FG.settings) {

    if (FG.settings.initialized === false) {
      chrome.runtime.sendMessage({"pageAction": "tutorial"});
    };

  } else {

    setTimeout(FG.launchTutorial, 250);

  };
};

FG.setSettings = function () {

  if ( JSON.stringify(BG.settings) !== JSON.stringify(BG.initialSettings) ) {
    chrome.storage.sync.set({settings: FG.settings}, function() {
      FG.getSettings();
    });
  }
};
