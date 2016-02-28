// bg.settings.js

if (window.bg === undefined) { window.bg = {} };
BG = window.bg;

BG.getSettings = function () {
  chrome.storage.sync.get('settings', function(items) {

    if (items.settings) {
      // store the sync object on window
      BG.settings = items.settings;
      // used to test for 'dirty' sync state
      BG.initialSettings = items.settings;
      console.log("Settings gotten:", BG.settings);
    } else {
      // initalize the settings object
      BG.settings = {};
      BG.settings.initialized = false;
      BG.settings.activeFilters = {};
      chrome.storage.sync.set({settings: BG.settings}, function() {
      });
    };

  });
};

BG.setSettings = function() {
  if (BG.settings !== BG.initialSettings) {
    chrome.storage.sync.set({settings: BG.settings}, function() {
      BG.getSettings();
    });
  }
};