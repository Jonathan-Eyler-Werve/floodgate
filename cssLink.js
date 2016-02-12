
if (window.mute === undefined) { window.mute = {} };


// takes a stylesheet file path as a string
window.mute.addStylesheet = function (path) {

  var link = document.createElement("link");
  link.href = chrome.extension.getURL(path);
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);

};


