// content.js

if (window.mute === undefined) { window.mute = {} };

$(function() {

  window.mute.addStylesheet("stylesheets/filterScout.css");
  window.mute.filterIntervalID = window.setInterval(window.mute.allFilters, 1000);

});


window.mute.allFilters = function () {
  // Sets the number of passes each tweet should recieve before tweetTriggerTextFilter skips that tweet
  window.mute.numberOfFilters = 3
  window.mute.tweetTriggerTextFilter(window.mute.racialSlurs);
  window.mute.tweetTriggerTextFilter(window.mute.queerSlurs);
  window.mute.tweetTriggerTextFilter(window.mute.triggerWords);

};


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.status === "clicked_browser_action" ) {

      clearInterval(window.mute.filterIntervalID)

    };

    // chrome.runtime.sendMessage({"foo-message": "message contents"});

  }
);
