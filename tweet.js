// tweet.js

if (window.mute === undefined) { window.mute = {} };

window.mute.tweetTriggerTextFilter = function (triggerWords) {
  console.log("tweetTriggerTextFilter runs")
  var tweets = $(".tweet");

  tweets.each( function(index, tweet){

    var tweetContent = $(tweet).find(".tweet-text").text().toLowerCase();

    $.each(triggerWords, function(index, word){
      var regex = new RegExp(word);
      var match = regex.test(tweetContent);

      if (match) {
        console.log("matched:", tweetContent, "+", word)
        $(tweet).css("background-color", "#cccccc");
        $(tweet).css("color", "#999999");

        }
    });
  });
};