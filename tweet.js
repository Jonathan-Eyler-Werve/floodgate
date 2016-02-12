// tweet.js

if (window.mute === undefined) { window.mute = {} };

window.mute.tweetTriggerTextFilter = function (triggerWords) {
  // console.log("tweetTriggerTextFilter runs")

  window.mute.tweetTriggerTextFilter.matchFound = false

  var tweets = $(".tweet, .stream-item-content, .QuoteTweet");

  tweets.each( function(index, tweet){

    // stashes the currently reviewed tweet so we can add to it
    window.mute.currentTweet = tweet

    var tweetContent = $(tweet).find(".tweet-text").text().toLowerCase();

    $.each(triggerWords, function(index, word){
      var regex = new RegExp(word.toLowerCase());
      var match = regex.test(tweetContent);

      if (match) {

        // word
        $(tweet).find(".tweet-text").text('Muted by Filter Scout because tweet includes: "' + word +'"')

        console.log("Matched on the word:", word);

        window.mute.tweetTriggerTextFilter.muteStuff(tweet, tweetContent)
        window.mute.tweetTriggerTextFilter.matchFound = true
        }
    });
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