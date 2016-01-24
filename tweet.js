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
        $(tweet).css("background-color", "red");
        }
    });
  });
};

window.mute.tweetTriggerTextFilter = function (triggerWords) {
  console.log("tweetTriggerTextFilter runs")
  var tweets = $(".tweet");

  tweets.each( function(index, tweet){

    // console.log(tweet);

    var tweetContent = $(tweet).find(".tweet-text").text();
    console.log("tweetContent is", tweetContent);

    $.each(triggerWords, function(index, word){

      var regex = new RegExp(word);
      var match = regex.test(tweetContent);

      if (match) {
        $(tweet).css("background-color", "red");
        }
    });
  });
};