document.addEventListener("DOMContentLoaded", function () {
  const innerHeader = document.querySelector("header");
  const logoImage = document.querySelector(".logo img");
  const gnbLinks = document.querySelectorAll(".innerHeader .gnb .mainMenu");
  const sideMenuImage = document.querySelector(".sideMenu img");
  const sideMenuAll = document.querySelector(".sideMenuAll");

  let sideMenuActiv = false;

  function applyMouseoverStyles() {
    innerHeader.classList.add("activated");
    innerHeader.style.backgroundColor = "#ffffff";
    logoImage.src = "./public/Images/logoBlack.png";

    for (const link of gnbLinks) {
      link.style.color = "#444444";
    }

    sideMenuImage.src = "./public/Icon/menuBlack.png";
  }

  function removeMouseoverStyles() {
    innerHeader.classList.remove("activated");
    innerHeader.style.backgroundColor = "";
    logoImage.src = "./public/Images/logoWhite.png";

    for (const link of gnbLinks) {
      link.style.color = "#ffffff";
    }

    sideMenuImage.src = "./public/Icon/menu.png";
  }

  innerHeader.addEventListener("mouseover", function () {
    if (!sideMenuActiv) {
      applyMouseoverStyles();
    }
  });

  innerHeader.addEventListener("mouseout", function () {
    if (!sideMenuActiv) {
      removeMouseoverStyles();
    }
  });

  sideMenuImage.addEventListener("click", function () {
    if (sideMenuAll.style.display === "block") {
      sideMenuAll.style.display = "none";
      sideMenuActiv = false;
    } else {
      sideMenuAll.style.display = "block";
      sideMenuActiv = true;
    }
  });

  document.addEventListener("click", function (event) {
    if (!sideMenuAll.contains(event.target) && event.target !== sideMenuImage) {
      sideMenuAll.style.display = "none";
      sideMenuActiv = false;
    }
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
      applyMouseoverStyles();
    } else {
      removeMouseoverStyles();
    }
  });
});

let headerSpace = document.querySelector("#header");
let headerCont = `

`;
headerSpace.innerHTML = headerCont;
