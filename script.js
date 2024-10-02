let range = 264;
// let max = ;

if (window.matchMedia("(max-width: 700px) and (max-height: 500px)").matches) {
  range = 40;
} else if (
  window.matchMedia("(max-width: 700px) and (min-height: 501px)").matches
) {
  range = 40;
}

var bubble = () => {
  var clutter = "";
  for (var i = 1; i <= range; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#Cbot").innerHTML = clutter;
};

bubble();

var hitval = (document.querySelector("#hitVal").textContent =
  Math.floor(Math.random() * 10));

var timmer = 60;
var score = 0;
var intervalId;

var countDown = () => {
  intervalId = setInterval(() => {
    if (timmer >= 0) {
      document.querySelector("#timeVal").textContent = timmer;
      timmer--;
    } else {
      document.querySelector(
        "#Cbot"
      ).innerHTML = `<div><h1>GAME OVER</h1><h2>Score: ${score}</h2></div>`;
      clearInterval(intervalId);
    }
  }, 1000);
};

countDown();

document.querySelector("#Cbot").addEventListener("click", (details) => {
  if (details.target.innerHTML == hitval) {
    score += 10;
    document.querySelector("#ScoreVal").textContent = score;
    bubble();
    hitval = document.querySelector("#hitVal").textContent = Math.floor(
      Math.random() * 10
    );
  } else {
    document.querySelector(
      "#Cbot"
    ).innerHTML = `<h1>GAME OVER</h1><h2>Score: ${score}</h2>`;
    clearInterval(intervalId);
  }
});
