// Nav Bar

const navBar = document.querySelector(".links");
const toolTip = document.querySelector(".navToolTip");
const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".openBtn");
const links = document.querySelectorAll(".links li");

openBtn.addEventListener("click", () => {
  navBar.classList.add("handleOpen");
  toolTip.classList.add("handleOpen");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("handleOpen");
  navBar.classList.add("handleClose");
  toolTip.classList.remove("handleOpen");
  toolTip.classList.add("handleClose");
});

for (let i = 0; i < 4; i++) {
  links[i].addEventListener("click", () => {
    navBar.classList.remove("handleOpen");
    navBar.classList.add("handleClose");
    toolTip.classList.remove("handleOpen");
    toolTip.classList.add("handleClose");
  });
}
