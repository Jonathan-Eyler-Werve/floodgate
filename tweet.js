// tweet.js

if (window.mute === undefined) { window.mute = {} };

window.mute.tweetNamesFilter = function () {
  console.log("tweetNamesFilter runs")
  var tweets = $(".tweet");

  tweets.each( function(index, tweet){
    var tweetName = $(tweet).attr("data-name");

    $.each(window.mute.names, function(index, name){

      var regex = new RegExp(name);
      var match = regex.test(tweetName);

      if (match) {
        $(tweet).css("background-color", "#666666");
        }
    });
  });
};

window.mute.tweetTriggerTextFilter = function (triggerWords) {
  console.log("tweetTriggerTextFilter runs")
  var tweets = $(".tweet");

  tweets.each( function(index, tweet){

    var tweetContent = $(tweet).find(".tweet-text").text().toLowerCase();
    // console.log("tweetContent is:", tweetContent);

    $.each(triggerWords, function(index, word){
      // console.log("filtering for:", word)
      var regex = new RegExp(word);
      var match = regex.test(tweetContent);

      if (match) {
        console.log("matched:", tweetContent, "+", word)
        $(tweet).css("background-color", "#cccccc");
        $(tweet).css("color", "#999999");
        // window.mute.imageHide(tweet);

        }
    });
  });
};