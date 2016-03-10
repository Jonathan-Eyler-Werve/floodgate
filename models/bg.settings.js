// bg.settings.js

if (window.bg === undefined) { window.bg = {} };

var BG = window.bg;

BG.getSettings = function () {
  chrome.storage.sync.get('settings', function(items) {

    if (items.settings) {
      // store the sync object on window
      BG.settings = items.settings;
      // copy values to test for 'dirty' sync state
      BG.initialSettings = JSON.parse(JSON.stringify(items.settings));
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
  if ( JSON.stringify(BG.settings) !== JSON.stringify(BG.initialSettings) ) {
    chrome.storage.sync.set({settings: BG.settings}, function() {

      BG.getSettings();

      // Notify all tabs of settings change
      chrome.tabs.query({active: false, currentWindow: true}, function(tabs) {
        var message = {"status": "settings_updated"};
        for (var i=0; i<tabs.length; ++i) {
          chrome.tabs.sendMessage(tabs[i].id, message);
        };
      });

    });
  }
};