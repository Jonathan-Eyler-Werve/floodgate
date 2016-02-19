// content.js

if (window.mute === undefined) { window.mute = {} };

$(function() {

  // initialize assets
  window.mute.addStylesheet("stylesheets/filterScout.css");

  // start a loop that rechecks for unfiltered tweets on interval
  window.mute.filterIntervalID = window.setInterval(window.mute.allFilters, 1000);

});


window.mute.allFilters = function () {
  // Sets the number of passes each tweet should recieve before tweetTriggerTextFilter skips that tweet
  window.mute.numberOfFilters = 6;
  window.mute.tweetTriggerTextFilter(window.mute.racialSlurs);
  window.mute.tweetTriggerTextFilter(window.mute.queerSlurs);
  window.mute.tweetTriggerTextFilter(window.mute.triggerWords);
  window.mute.tweetTriggerTextFilter(window.mute.triggerWarning);
  window.mute.tweetTriggerTextFilter(window.mute.agressionWords);
  window.mute.tweetTriggerTextFilter(window.mute.sexCrimeWords);
};


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.status === "clicked_browser_action" ) {

      clearInterval(window.mute.filterIntervalID)

    };

    // chrome.runtime.sendMessage({"foo-message": "message contents"});

  }
);
