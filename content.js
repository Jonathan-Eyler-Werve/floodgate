// content.js

if (window.mute === undefined) { window.mute = {} };




chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.status === "clicked_browser_action" ) {
      window.mute.tweetFix();
      window.mute.imageHide();
    };

    console.log("done!");
    chrome.runtime.sendMessage({"status": "page_modified"});

  }
);
