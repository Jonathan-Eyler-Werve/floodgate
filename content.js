// content.js

window.mute = {};

window.mute.names = [
"Anthony",
"Lawrence",
"Richard",
"Leslie",
"David",
"Robert",
"Larry",
"Philippe",
"Leonard",
"John",
"Ralph",
"Marc",
"Rex",
"Fabrizio",
"Robert",
"Mark",
"Alan",
"Brian",
"Kenneth",
"Steve",
"Brian",
"Sandeep",
"Randall",
"David",
"Miles",
"Laurence",
"Muhtar",
"Stephen",
"Paal",
"Lamberto",
"James",
"Marillyn",
"Brian",
"Michael",
"Lloyd",
"Glenn",
"Charles",
"John",
"R.A",
"Louis",
"John",
"Margaret",
"Trevor",
"Sean",
"Jay",
"Richard",
"James",
"Marissa",
"Carol",
"Wesley",
"Phebe",
"Steven",
"Paul",
"James",
"John",
"George",
"Robert",
"David",
"Lawrence",
"Kent",
"Howard",
"Andrew",
"Jeffrey",
"A.G.",
"Emanuel",
"David",
"Jeffrey",
"Daniel",
"Rupert",
"Samuel",
"Scott",
"Ryan",
"Ian",
"Alex",
"Martin",
"Glenn",
"Leslie",
"Stephen",
"Joseph",
"Frank",
"Evan",
"Christopher",
"Virginia",
"David",
"Richard",
"Robert",
"Andrew",
"Donald",
"Peter",
"John",
"Ian",
"Glenn",
"Marc",
"Hamid",
"Brett",
"William",
"Jeffrey",
"Martin",
"Mike"
];

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

window.mute.imageHide = function () {
  console.log("mute.imageHide runs")
  var images = $("img");
  var divs = $("div");

  $.each(images, function(index, image){
    if ($(image).width() > 20) {

      $(image).attr("width", $(image).width());
      $(image).attr("height", $(image).height());
      $(image).css("background-color", "pink");
      $(image).attr("src", "");
      console.log("hiding this image:");
      console.log(image);
    }
  });

  $.each(divs, function(index, div){

    if ($(div).css("background-image") !== "none" ){
      console.log('hiding', $(div).css("background-image"));
      $(div).css("background-image", "url('')");
    };

  });

};


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.status === "clicked_browser_action" ) {
      // window.mute.tweetFix();
      window.mute.imageHide();
    };

    console.log("done!");
    chrome.runtime.sendMessage({"status": "page_modified"});

  }
);
