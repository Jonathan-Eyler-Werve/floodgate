// imageHide.js

// takes a jquery object, modifies DOM element, returns nothing

if (window.mute === undefined) { window.mute = {} };

window.mute.imageHide = function (target) {

  target = $(target)

  var elements, images, minSize;

  images = window.mute.imageHide.getImages(target);
  elements = window.mute.imageHide.getElements(target);
  minSize = 20

  $.each(images, function(index, image){

    if (image !== undefined) {
      $(image).attr("width", $(image).width());
      $(image).attr("height", window.mute.imageHide.getHeight(image));
      $(image).css("background-color", "#D8F6CE");
      $(image).attr("src", "");
      $(image).attr("srcset", "");
      // console.log("hiding this image:", image);
    }
  });

  $.each(elements, function(index, element){

    if ( ($(element).css("background-image") !== "none" ) && ( $(element).attr("width") > minSize) ) {
      console.log('hiding background-image at', $(element).css("background-image"));
      $(element).css("background-image", "url('')");
      $(element).css("background-color", "#D8F6CE");
    };

  });

  // console.log("mute.imageHide completes")
};

window.mute.imageHide.getImages = function (target) {
  return target.find("img");
};

window.mute.imageHide.getElements = function (target) {
  return target.find("*"); // performance optimization here?
};

window.mute.imageHide.getHeight = function (image) {
  if ( $(image).height() >= 200 ) {
    return 200
  }
  else {
    return $(image).height()
  };
};

