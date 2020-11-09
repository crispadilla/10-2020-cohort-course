var currentPosition = 0;
var imageSlider = document.getElementsByClassName("imageSlider")[0];
var images = document.getElementsByClassName("img_indicator");
var numImages = images.length;
var imageIndicators = document.getElementsByClassName("img_indicator");
var numImgIndicators = imageIndicators.length;
var shiftAmt = 640;
var maxShift =
  (document.getElementsByClassName("img_indicator").length - 1) *
  (shiftAmt * -1);
var maxMove = numImgIndicators - 1;
var positionValues = [];

// Populate positionValues array and set up style the
// image indicator buttons.
populatePositionArray();
updateImageIndicator(currentPosition);

function populatePositionArray() {
  for (var i = 0; i < numImgIndicators; i++) {
    positionValues[i] = i * shiftAmt * -1;
  }
}

/**  I took inspiration from the W3 School website and
 * used their approach, as well as some of my own ideas,
 * to make this carousel work.
 */

function prevImage(n) {
  currentPosition == 0 ? null : moveImage((currentPosition += n));
}

function nextImage(n) {
  currentPosition == maxMove ? null : moveImage((currentPosition += n));
}

function moveImage(n) {
  var newPosition = n;
  currentPosition = newPosition;
  updateImageIndicator(newPosition);
  imageSlider.style.transition = "transform 1.0s ease-in-out";
  imageSlider.style.transform =
    "translateX(" + positionValues[newPosition] + "px)";
  imageSlider.style.t;
}

function updateImageIndicator(n) {
  for (var i = 0; i < numImgIndicators; i++) {
    imageIndicators[i].classList.remove("current-img");
  }
  imageIndicators[n].classList.add("current-img");
}

/** First attempt. It does work with the left and
 * right arrow buttons, but the approach may not
 * work with the indicator buttons.
 */
// function prevImage(n) {
//   currentPosition < 0 ? moveImage(n) : moveImage(0);
// }

// function nextImage(n) {
//   currentPosition > maxShift ? moveImage(n) : moveImage(0);
// }

// function moveImage(n) {
//   currentPosition += n * shiftAmt;
//   imageSlider.style.transform = "translateX(" + currentPosition + "px)";
// }
