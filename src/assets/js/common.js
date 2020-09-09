
var cw = document.documentElement.clientWidth;

fontSize(cw);

window.onresize = function () {
  var cw = document.documentElement.clientWidth;
  fontSize(cw);
}


function fontSize(c) {
  document.documentElement.style.fontSize = c / 3.75 + "px";
}