const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".close_icon");
const imageGrid = document.querySelector(".image_grid_container");
const mainImage = document.querySelector(".main_image");

const dragon = document.querySelector(".dragon");
const dice = document.querySelector(".dice");
const penPaper = document.querySelector(".pen_paper");
const sword = document.querySelector(".sword");

const text = document.querySelector(".text");

window.addEventListener("load", startAnimations);

function startAnimations() {
  console.log("activateSVGs");
  console.log(dragon);

  setTimeout(function () {
    dragon.classList.add("pop-up");
  }, 600);
  setTimeout(function () {
    sword.classList.add("pop-up");
  }, 800);
  setTimeout(function () {
    dice.classList.add("pop-up");
  }, 1000);
  setTimeout(function () {
    penPaper.classList.add("pop-up");
  }, 1300);
  setTimeout(function () {
    text.classList.add("visible");
  }, 1800);
}

imageGrid.addEventListener("click", chooseImage);
closeIcon.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// OPEN MODAL

function openModal() {
  console.log("openModal");
  overlay.classList.add("visible");
  modal.classList.add("visible");
}

// CLOSE MODAL

function closeModal() {
  console.log("closeModal");
  overlay.classList.remove("visible");
  modal.classList.remove("visible");
}

function chooseImage(e) {
  // console.log("chooseImage");
  if (!e.target.classList.contains("image")) return;
  console.log(e.target);

  mainImage.src = e.target.src;
  openModal();
}
