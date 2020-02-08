function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

(function() {
  var style = document.createElement("style");
  style.innerHTML = "@keyframes bubble-up{0%{bottom:0;}100%{bottom:100vh}}";
  document.head.appendChild(style);

  var bubbleBox = document.createElement("div");
  bubbleBox.id = "bubbleBox";
  bubbleBox.setAttribute("style", "position: absolute;bottom: 0;");
  setInterval(() => {
    var bubble = document.createElement("div");
    var left = randomNum(0, 100);
    var animation = randomNum(15, 35); //
    var size = randomNum(20, 36);
    var opacity = randomNum(5, 30) / 100;
    var r = randomNum(150, 255);
    var g = randomNum(150, 255);
    var b = randomNum(150, 255);

    bubble.setAttribute(
      "style",
      "position: absolute;width:" +
        size +
        "px;height: " +
        size +
        "px;left:" +
        left +
        "vw;bottom: 0;background: rgba(" +
        r +
        ", " +
        g +
        ", " +
        b +
        ", " +
        opacity +
        ");border-radius: 50%;animation:bubble-up " +
        animation +
        "s 1s forwards;"
    );
    bubbleBox.appendChild(bubble);
    setTimeout(() => {
      bubbleBox.removeChild(bubble);
    }, 15000); //
  }, 500); //
  document.body.appendChild(bubbleBox);
})();
