// background.js

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
    console.log(request);

    if ( request.filterEvent === "matchFound" ) {
      console.log("Message: ", request.filterEvent );
    }

  });

console.log("background script runs")



