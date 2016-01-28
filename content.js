// content.js

if (window.mute === undefined) { window.mute = {} };


$(function() {

  // window.mute.tweetTriggerTextFilter(window.mute.triggerWords);
  window.mute.filterIntervalID = window.setInterval(window.mute.tweetTriggerTextFilter, 1000, window.mute.triggerWords);

});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.status === "clicked_browser_action" ) {

      clearInterval(window.mute.filterIntervalID)

    };

    // chrome.runtime.sendMessage({"foo-message": "message contents"});

  }
);
