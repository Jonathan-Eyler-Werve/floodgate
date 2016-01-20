// imageHide.js
if (window.mute === undefined) { window.mute = {} };

window.mute.imageHide = function () {
  console.log("mute.imageHide runs")
  var images = $("img");
  var elements = $("div, a, span, li, figure");

  $.each(images, function(index, image){
    if ($(image).width() > 20) {

      $(image).attr("width", $(image).width());
      $(image).attr("height", $(image).height());
      $(image).css("background-color", "#A9F5A9");
      $(image).attr("src", "");
      $(image).attr("srcset", "");
      console.log("hiding this image:");
      console.log(image);
    }
  });

  $.each(elements, function(index, element){

    if ($(element).css("background-image") !== "none" ){
      console.log('hiding', $(element).css("background-image"));
      $(element).css("background-image", "url('')");
      $(element).css("background-color", "#E0F8E0");
    };

  });

};
