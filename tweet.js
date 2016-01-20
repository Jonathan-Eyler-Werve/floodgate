// tweet.js
if (window.mute === undefined) { window.mute = {} };

window.mute.tweetFix = function () {
  console.log("tweetFix runs")
  var tweets = $(".tweet");

  $.each(tweets, function(index, tweet){
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