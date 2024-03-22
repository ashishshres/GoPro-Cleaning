const date = new Date();
let year = date.getFullYear();
document.querySelector(".date").innerHTML = year;

let toggle = false;
let menu = document.querySelector(".ri-menu-line");
let menuItems = document.querySelector(".hamburger-menu");
menu.addEventListener("click", () => {
  if (!toggle) {
    menuItems.style.display = "flex";
    toggle = true;
  } else {
    menuItems.style.display = "none";
    toggle = false;
  }
});

let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.location.href = "../../index.html";
});
