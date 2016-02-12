// tweet.js

if (window.mute === undefined) { window.mute = {} };

window.mute.tweetTriggerTextFilter = function (triggerWords) {
  // console.log("tweetTriggerTextFilter runs")

  window.mute.tweetTriggerTextFilter.matchFound = false

  var tweets = $(".tweet, .stream-item-content, .QuoteTweet");

  tweets.each( function(index, tweet){
    if ( tweet.scanned !== true ) {
      // resets current Tweet for this tweet-loop
      window.mute.currentTweet = {}
      // stashes the currently reviewed tweet so we can find it in DOM
      window.mute.currentTweet.html = tweet

      var tweetContent = $(tweet).find(".tweet-text").text().toLowerCase();

      $.each(triggerWords, function(index, word){

        var regex = new RegExp(word.toLowerCase());
        var match = regex.test(tweetContent);

        if (match) {

          $(tweet).find("filterScout reason-for-mute")
          appendText = '<div class="filterScout reason-for-mute">Muted by Filter Scout because it includes: "' + word +'"</p>'

          $(tweet).append('<div>Muted by Filter Scout because tweet includes: "' + word +'"</p>')

          console.log("Matched on the word:", word);

          window.mute.tweetTriggerTextFilter.muteStuff(tweet, tweetContent)
          window.mute.tweetTriggerTextFilter.matchFound = true
          }
      });
    };

    tweet.scanned = true
  });

  if (window.mute.tweetTriggerTextFilter.matchFound === true)
    chrome.runtime.sendMessage({filterEvent: "matchFound"});
};


window.mute.tweetTriggerTextFilter.muteStuff = function (tweet, tweetContent) {
  $(tweet).css("background-color", "#E6F8E0");
  $(tweet).css("border-color", "#CFE9C7");
  $(tweet).css("color", "#B8CDB9");
  $(tweet).find("a").css("color", "#A6B6A7")
  $(tweet).find("strong, b, .tweet-text").css("color", "#B8CDB9")
  window.mute.imageHide(tweet);
}