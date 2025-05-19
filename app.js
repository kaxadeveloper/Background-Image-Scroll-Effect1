const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  const offset = window.pageYOffset;
  const opacity = Math.max(0, 1 - offset / 900);
  const size = Math.max(100, 160 - offset / 12);

  bgImageEl.style.opacity = opacity;
  bgImageEl.style.backgroundSize = size + "%";
}
