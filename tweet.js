// tweet.js

if (window.mute === undefined) { window.mute = {} };

window.mute.tweetTriggerTextFilter = function (triggerWords) {
  console.log("tweetTriggerTextFilter runs")
  var tweets = $(".tweet, .stream-item-content");

  tweets.each( function(index, tweet){

    var tweetContent = $(tweet).find(".tweet-text").text().toLowerCase();

    $.each(triggerWords, function(index, word){
      var regex = new RegExp(word);
      var match = regex.test(tweetContent);

      if (match) {
        console.log("MATCHED", word, "WITH:", tweetContent);
        $(tweet).css("background-color", "#E6F8E0");
        $(tweet).css("color", "#999999");
        $(tweet).find("a").css("color", "#888888")
        window.mute.imageHide(tweet);
        }
    });
  });
};