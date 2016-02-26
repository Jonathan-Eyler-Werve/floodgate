// background.js

if (window.mute === undefined) { window.mute = {} };

$(function() {

  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"status": "clicked_browser_action"});
    });
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log("Message recieved:", request);

      if ( request.filterEvent === "matchFound" ) {
        console.log("Message: ", request.filterEvent );
        // sets icon to Active state
        chrome.browserAction.setIcon({
          path : "images/icon-active.png",
          tabId: sender.tab.id
        });
      }

      if ( request.pageAction === "tutorial" ) {

        chrome.tabs.create({'url': chrome.extension.getURL('views/tutorial.html')}, function(tab) {
          console.log("I made a turorial page");
        });

      }


    });

  console.log("background script runs")

});

