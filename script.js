const flyCopter = function() {
  const copterStyle = document.getElementById("copter").style;
  if (event.key == "ArrowUp") {
    let location = +copterStyle.top.replace("px", "") - 10;
    copterStyle.top = location + "px";
  }
};

const dragCopter = function(copterStyle) {
  let copterTopLocation = +copterStyle.top.replace("px", "") + 0.3;
  copterStyle.top = copterTopLocation + "px";
  return copterTopLocation;
};

const moveBars = function(divId) {
  let leftPosition = +document
    .getElementById(divId)
    .style.left.replace("px", "");
  return leftPosition - 1;
};

const getBarHeight = function(divId) {
  let barHeight = 0;
  if (divId < 7) {
    barHeight = Math.floor(Math.random() * (400 - 150) + 150);
  }
  if (divId > 6) {
    barHeight = Math.floor(Math.random() * (250 - 100) + 100);
  }
  return barHeight;
};

const setBarHeight = function(divId, barHeight) {
  const barStyle = document.getElementById(divId).style;
  if (divId < 7) {
    barStyle.height = barHeight + "px";
  }
  if (divId > 6) {
    barStyle.height = barHeight + "px";
  }
};

const startGame = function() {
  const copterStyle = document.getElementById("copter").style;
  let barHeight = 0;
  let barLeftPosition = 0;
  let logic = 0;
  let game = setInterval(function() {
    copterLocation = dragCopter(copterStyle);

    for (let divId = 1; divId < 13; divId++) {
      const divIdDoc = document.getElementById(divId);
      barLeftPosition = moveBars(divId);

      if (barLeftPosition < 0) {
        barHeight = getBarHeight(divId);
        setBarHeight(divId, barHeight);
        barLeftPosition = 1200;
      }
      divIdDoc.style.left = barLeftPosition + "px";
      let className = divIdDoc.className;

      if (barLeftPosition <= 65) {
        if (copterLocation <= barHeight && className == "topBar") {
          clearInterval(game);
        }

        logic = copterLocation + barHeight;
        if (className == "bottomBar" && logic >= 800) {
          clearInterval(game);
        }
      }
    }
  }, 1);
};

const main = function() {
  if (event.key == " ") {
    startGame();
  }
};
