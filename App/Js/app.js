const navbar = document.getElementById("mobile_toggle_nav");
const barBtn = document.getElementById("barBtn");

barBtn.addEventListener("click", () => {
  navbar.classList.toggle("toggle");
});
