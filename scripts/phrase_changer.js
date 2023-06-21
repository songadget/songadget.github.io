const allPhrases = ["Songadget eliminates the blank page.\n", "Songadget gets the ball rolling.\n", "Songadget provides a jumping off point, and you do the rest.", "Every prompt contains a songwriting idea.\n"];

//Global variables
var phraseTag;
var currentIndex = 0;
var loop;
var opacity = 0.0;

var fadeInterval = 80;

window.onload = init;

  function init(){
	phraseTag = document.getElementById("changing-phrase");
  phraseTag.innerHTML = allPhrases[currentIndex];
  setTimeout(function() {
    fadeIn();
  }, 1000);
  }

function fadeOut() {
  setTimeout(function() {
    opacity -= 0.1;
    if (opacity < 0) {
      opacity = 0;
    }
    phraseTag.style.opacity = opacity;
    if (opacity > 0) {
      fadeOut();
    } else {
      changePhrase();
      fadeIn();
    }
  }, fadeInterval);
}

function fadeIn() {
    setTimeout(function() {
      opacity += 0.1;
      if (opacity > 1) {
        opacity = 1;
      }
      phraseTag.style.opacity = opacity;
      if (opacity < 1) {
        fadeIn();
      } else {
        setTimeout(fadeOut, 3500);
      }
    }, fadeInterval);
}

function changePhrase () {
    currentIndex++;
    if (currentIndex >= allPhrases.length) {
        currentIndex = 0;
    }

	phraseTag.innerHTML = allPhrases[currentIndex];
}