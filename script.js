let position = 0;

const flyCopter = function() {
  const copterStyle = document.getElementById("copter").style;
  if (event.key == "ArrowUp") {
    let location = +copterStyle.top.replace("px", "") - 10;
    copterStyle.top = location + "px";
  }
};

const dragShuttle = function() {
  const copterStyle = document.getElementById("copter").style;
  let copterTopLocation = +copterStyle.top.replace("px", "") + 0.3;
  copterStyle.top = copterTopLocation + "px";
  return copterTopLocation;
};

const moveBars = function(divId) {
  let leftPosition = +document
    .getElementById(divId)
    .style.left.replace("px", "");
  return leftPosition - 10;
};

const getBarHeight = function(divId) {
  const barStyle = document.getElementById(divId).style;
  if (divId < 7) {
    barStyle.height = Math.floor(Math.random() * (400 - 150) + 150);
  }
  if (divId > 6) {
    barStyle.height = Math.floor(Math.random() * (250 - 100) + 100);
  }
  return barStyle.height;
};

const runGame = function() {
  let barPosition = 0;
  let barHeight = 0;
  let logic = 0;
  let game = setInterval(function() {
    shuttleLocation = dragShuttle();

    for (let divId = 1; divId < 13; divId++) {
      barPosition = moveBars(divId);
      if (barPosition < 0) {
        barHeight = getBarHeight(divId);
        barHeight = +barHeight.replace("px", "");
        barPosition = 1200;
      }
      document.getElementById(divId).style.left = barPosition + "px";
      let className = document.getElementById(divId).className;

      if (barPosition <= 65) {
        logic = shuttleLocation + barHeight;

        if (shuttleLocation <= barHeight && className == "topBar") {
          clearInterval(game);
        }

        if (className == "bottomBar" && logic >= 800) {
          clearInterval(game);
        }
      }
    }
  }, 100);
};

const main = function() {
  if (event.key == " ") {
    runGame();
  }
};
