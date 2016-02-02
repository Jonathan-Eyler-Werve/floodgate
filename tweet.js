// tweet.js

if (window.mute === undefined) { window.mute = {} };

window.mute.tweetTriggerTextFilter = function (triggerWords) {
  // console.log("tweetTriggerTextFilter runs")

  window.mute.tweetTriggerTextFilter.matchFound = false

  var tweets = $(".tweet, .stream-item-content, .QuoteTweet");

  tweets.each( function(index, tweet){

    var tweetContent = $(tweet).find(".tweet-text").text().toLowerCase();

    $.each(triggerWords, function(index, word){
      var regex = new RegExp(word.toLowerCase());
      var match = regex.test(tweetContent);

      if (match) {
        window.mute.tweetTriggerTextFilter.hideStuff(tweet, tweetContent)
        window.mute.tweetTriggerTextFilter.matchFound = true
        }
    });
  });

  if (window.mute.tweetTriggerTextFilter.matchFound === true)
    chrome.runtime.sendMessage({filterEvent: "matchFound"});
};


window.mute.tweetTriggerTextFilter.hideStuff = function (tweet, tweetContent) {
  $(tweet).css("background-color", "#E6F8E0");
  $(tweet).css("border-color", "#CFE9C7");
  $(tweet).css("color", "#B8CDB9");
  $(tweet).find("a").css("color", "#A6B6A7")
  $(tweet).find("strong, b, .tweet-text").css("color", "#B8CDB9")
  window.mute.imageHide(tweet);
}