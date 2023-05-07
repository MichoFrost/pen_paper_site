const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".close_icon");
const imageGrid = document.querySelector(".image_grid_container");
const mainImage = document.querySelector(".main_image");

console.log(closeIcon);

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
