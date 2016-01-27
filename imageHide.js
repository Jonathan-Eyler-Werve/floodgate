// imageHide.js

// takes a jquery object, modifies DOM element, returns nothing

if (window.mute === undefined) { window.mute = {} };

window.mute.imageHide = function (target) {
  console.log("mute.imageHide runs");

  var images = window.mute.imageHide.getImages(target);
  var elements = window.mute.imageHide.getElements(target);

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
      console.log('hiding background-image at', $(element).css("background-image"));
      $(element).css("background-image", "url('')");
      $(element).css("background-color", "#E0F8E0");
    };

  });

  console.log("mute.imageHide completes")
};

window.mute.imageHide.getImages = function (target) {
  return target.find("img");
};

window.mute.imageHide.getElements = function (target) {
  return target.find("*"); // performance optimization here?
};
