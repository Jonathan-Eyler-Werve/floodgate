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
        console.log(match)
        console.log(tweetName);
        console.log(name);
        $(tweet).css("background-color", "red");
        }
    });
  });
};

window.mute.tweetTriggerTextFilter = function () {
  console.log("tweetTriggerTextFilter runs")
  var tweets = $(".tweet");

  tweets.each( function(index, tweet){

    console.log(tweet);

    var tweetContent = tweet.$(".tweet-text");
    console.log(tweetContent);

    $.each(window.mute.triggerWords, function(index, word){

      var regex = new RegExp(word);
      var match = regex.test(tweetContent);

      if (match) {
        console.log(match)
        console.log(tweetContent);
        console.log(word);
        $(tweet).css("background-color", "red");
        }
    });
  });
};