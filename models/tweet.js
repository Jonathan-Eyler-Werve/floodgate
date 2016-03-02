// tweet.js

if (window.mute === undefined) { window.mute = {} };

window.mute.filterTweets = function (triggerWords) {

  window.mute.filterTweets.matchFound = false

  var tweets = window.mute.filterTweets.getTweets();

  tweets.each( function(index, tweet){

    // initialize tweet
    if ( tweet.reasons === undefined ) { tweet.reasons = [] };
    if ( tweet.timesScanned === undefined ) { tweet.timesScanned = 0 }

    if (
        // scan once per filter running
        ( tweet.timesScanned < window.mute.numberOfFilters ) &&
        // skip this loop if inside a steam-item-content, avoids double scan in notifications
        ( $($(tweet).parents(".stream-item-content")).size() === 0 )
      ) {

      var tweetContent = $(tweet).find(".tweet-text").text().toLowerCase();
      var tweetName = $(tweet).find(".fullname").text().toLowerCase();
      var tweetRetweeterName = $(tweet).find(".js-user-profile-link").text().toLowerCase();

      $.each(triggerWords, function(index, word){

        var regex = new RegExp(word.toLowerCase());
        var match = regex.test(tweetContent + " " + tweetName + " " + tweetRetweeterName);

        if (match) {
          tweet.reasons.push(word)
          tweet.filterAction = "muted"

          $(tweet).find(".AdaptiveMedia, button, iframe, .stream-item-footer, .stream-item-header, .tweet-content, .tweet-context, .tweet-text").addClass("mute-this");

          window.mute.filterTweets.muteStuff(tweet, tweetContent);
          window.mute.filterTweets.matchFound = true;
        }

      });

      tweet.timesScanned += 1;

      // append justification to muted tweet, but only on last pass of filter
      appendText = '<div class="filterScout reason-for-mute">Muted by Floodgate because it includes: "' + tweet.reasons.join('", "') + '"</p>';
      if (
        ( tweet.filterAction ) &&
        ( tweet.timesScanned === window.mute.numberOfFilters )
      ) {
          $(tweet).append(appendText)
      };

    };
  });

  if (window.mute.filterTweets.matchFound === true)
    chrome.runtime.sendMessage({filterEvent: "matchFound"});
};

window.mute.filterTweets.getTweets = function () {
  return $(".tweet, .stream-item-content, .QuoteTweet");
};

window.mute.filterTweets.muteStuff = function (tweet, tweetContent) {
  $(tweet).css("background-color", "#E6F8E0");
  $(tweet).css("border-color", "#CFE9C7");
  $(tweet).css("color", "#B8CDB9");
  $(tweet).find("a").css("color", "#A6B6A7")
  $(tweet).find("strong, b, .tweet-text").css("color", "#B8CDB9")
  window.mute.imageHide(tweet);
}