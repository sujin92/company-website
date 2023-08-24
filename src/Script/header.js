document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menuIcon");
  const menuIconClose = document.querySelector(".menuIconClose");
  const sideMenuAll = document.querySelector(".sideMenuAll");

  menuIcon.addEventListener("click", function () {
    sideMenuAll.style.display = "block";
    menuIcon.style.display = "none";
    menuIconClose.style.display = "block";
  });

  menuIconClose.addEventListener("click", function () {
    sideMenuAll.style.display = "none";
    menuIcon.style.display = "block";
    menuIconClose.style.display = "none";
  });
});
