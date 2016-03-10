// tweet.js

if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

// takes action as string - "mute", "hide"
// takes filter as array of words
FG.filterTweets = function (action, filter) {

  FG.filterTweets.matchFound = false

  var tweets = FG.filterTweets.getTweets();

  tweets.each( function(index, tweet){

    // initialize tweet
    if ( tweet.reasons === undefined ) { tweet.reasons = [] };
    if ( tweet.timesScanned === undefined ) { tweet.timesScanned = 0 }

    if (
        // scan once per filter running
        ( tweet.timesScanned < FG.numberOfFilters ) &&
        // skip this loop if inside a steam-item-content, avoids double scan in notifications
        ( $($(tweet).parents(".stream-item-content")).size() === 0 )
      ) {

      var tweetContent = $(tweet).find(".tweet-text").text().toLowerCase();
      var tweetName = $(tweet).find(".fullname").text().toLowerCase();
      var tweetRetweeterName = $(tweet).find(".js-user-profile-link").text().toLowerCase();

      $.each(filter, function(index, word){

        var regex = new RegExp('(\\b|#|"|\')' + word.toLowerCase() + '(\\b|s|es|ies|able|ed|ing|d|\'s|"|\')');
        var match = regex.test(tweetContent + " " + tweetName + " " + tweetRetweeterName);
        if (match) {
          // builds collection used to explain why filter was applied
          tweet.reasons.push(word)
          tweet.filterAction = "muted"

          var selectorForMute = ".AdaptiveMedia, button, iframe, .stream-item-footer, .stream-item-header, .tweet-content, .tweet-context, .tweet-text";
          $(tweet).find(selectorForMute).addClass("mute-this");

          if (action === "mute") { FG.filterTweets.muteStuff(tweet, tweetContent); };
          FG.filterTweets.matchFound = true;
        }

      });

      tweet.timesScanned += 1;

      // append justification to muted tweet, but only on last pass of filter
      appendText = '<div class="filterScout reason-for-mute">Muted by Floodgate because it includes: "' + tweet.reasons.join('", "') + '"</p>';
      if (
        ( tweet.filterAction ) &&
        ( tweet.timesScanned === FG.numberOfFilters )
      ) {
          $(tweet).append(appendText)
      };

    };
  });

  if (FG.filterTweets.matchFound === true)
    chrome.runtime.sendMessage({filterEvent: "matchFound"});
};

FG.filterTweets.getTweets = function () {
  return $(".tweet, .stream-item-content, .QuoteTweet");
};

FG.filterTweets.muteStuff = function (tweet, tweetContent) {
  $(tweet).css("background-color", "#E6F8E0");
  $(tweet).css("border-color", "#CFE9C7");
  $(tweet).css("color", "#B8CDB9");
  $(tweet).find("a").css("color", "#A6B6A7")
  $(tweet).find("strong, b, .tweet-text").css("color", "#B8CDB9")
  FG.imageHide(tweet);
}