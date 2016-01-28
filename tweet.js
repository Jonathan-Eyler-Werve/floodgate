// tweet.js

if (window.mute === undefined) { window.mute = {} };

window.mute.tweetTriggerTextFilter = function (triggerWords) {
  console.log("tweetTriggerTextFilter runs")
  var tweets = $(".tweet, .stream-item-content, .QuoteTweet");

  tweets.each( function(index, tweet){

    var tweetContent = $(tweet).find(".tweet-text").text().toLowerCase();

    $.each(triggerWords, function(index, word){
      var regex = new RegExp(word);
      var match = regex.test(tweetContent);

      if (match) {
        console.log("MATCHED", word, "WITH:", tweetContent);
        $(tweet).css("background-color", "#E6F8E0");
        $(tweet).css("border-color", "#D9E6D4");
        $(tweet).css("color", "#B8CDB9");
        $(tweet).find("a").css("color", "#A6B6A7")
        $(tweet).find("strong, b, .tweet-text").css("color", "#B8CDB9")
        window.mute.imageHide(tweet);
        }
    });
  });
};
