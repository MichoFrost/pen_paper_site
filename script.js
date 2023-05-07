const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".close_icon");
const imageGrid = document.querySelector(".image_grid_container");
const mainImage = document.querySelector(".main_image");

const dragonContainer = document.querySelector(".dragon_container");
const diceContainer = document.querySelector(".dice_container");
const penPaperContainer = document.querySelector(".pen_paper_container");
const swordContainer = document.querySelector(".sword_container");
// const dragon = document.querySelector(".dragon");
// const dice = document.querySelector(".dice");
// const penPaper = document.querySelector(".pen_paper");
// const sword = document.querySelector(".sword");

const text = document.querySelector(".text");

window.addEventListener("load", startAnimations);

function startAnimations() {
  console.log("activateSVGs");

  setTimeout(function () {
    dragonContainer.classList.add("pop-up");
  }, 600);
  setTimeout(function () {
    swordContainer.classList.add("pop-up");
  }, 800);
  setTimeout(function () {
    diceContainer.classList.add("pop-up");
  }, 1000);
  setTimeout(function () {
    penPaperContainer.classList.add("pop-up");
  }, 1300);
  setTimeout(function () {
    text.classList.add("visible");
  }, 2000);
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
