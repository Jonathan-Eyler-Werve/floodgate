if (window.floodgate === undefined) { window.floodgate = {} };
var FG = window.floodgate;

// takes a stylesheet file path as a string
FG.addStylesheet = function (path) {

  var link = document.createElement("link");
  link.href = chrome.extension.getURL(path);
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);

};


