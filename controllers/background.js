// background.js

if (window.bg === undefined) { window.bg = {} };
BG = window.bg;

$(function() {

  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function(tab) {

    console.log("Adding event listener");

    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"status": "clicked_browser_action"});
    });

    // open the settings page
    chrome.tabs.create({'url': chrome.extension.getURL('views/tutorial.html')}, function(tab) {
      console.log("I open settings b/c of a Browser Action click");
    });

  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log("Message recieved:", request);

      // sets icon to Active state
      if ( request.filterEvent === "matchFound" ) {
        chrome.browserAction.setIcon({
          path : "images/icon-active.png",
          tabId: sender.tab.id
        });
      }

      if ( request.settings ) {
        BG.settings = request.settings;
        BG.initialSettings = request.settings;
      };

      if ( request.pageAction === "tutorial" ) {
        chrome.tabs.create({'url': chrome.extension.getURL('views/tutorial.html')}, function(tab) {
          console.log("I made a turorial page");

        });
      }

    });

  //poll for dirty data state, send settings to Chrome storage
  BG.getSettings();
  window.setInterval(BG.setSettings, 5000);

});

