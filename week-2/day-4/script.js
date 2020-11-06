var currentPosition = 0;
var imageSlider = document.getElementsByClassName("imageSlider")[0];
var images = document.getElementsByClassName("img_indicator");
var currentImage = document.getElementsByClassName("current-img")[0];
var nextImage = document.getElementsByClassName("current-img")[1];
// var imageWidth = images[0].getBoundingClientRect().width;
var btnWidth = document.getElementsByClassName("left-btn")[0].width;
var imageWidth = 640;
var maxShift =
  (document.getElementsByClassName("img_indicator").length - 1) *
  (imageWidth * -1);

console.log(maxShift);

let leftButton = document.getElementsByClassName("left-btn")[0];
var rightButton = document.getElementsByClassName("right-btn")[0];

leftButton.addEventListener("click", function () {
  if (currentPosition < 0) {
    currentPosition = currentPosition + imageWidth;
    imageSlider.style.transform = "translateX(" + currentPosition + "px)";
  }
  // nextImage.classList.add("current-img");
  // currentImage.classList.remove("current-img");
});

rightButton.addEventListener("click", function () {
  console.log(currentPosition);
  if (currentPosition > maxShift) {
    currentPosition = currentPosition - imageWidth;
    imageSlider.style.transform = "translateX(" + currentPosition + "px)";
  }
  // nextImage.classList.add("current-img");
  // currentImage.classList.remove("current-img");
});
