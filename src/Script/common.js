let headerSpace = document.querySelector("#header");
let headerCont = `
<header>
<div class="innerHeader">
  <h1 class="logo">
    <a href="/index.html"
      ><img src="../../public/Images/logoBlack.png" alt="logo"
    /></a>
  </h1>

  <ul class="gnb">
    <li class="mainMenu">
      <a href="../../src/Pages/about.html">ABOUT</a>
    </li>
    <li class="mainMenu">
      <a href="../../src/Pages/business.html">BUSINESS</a>
    </li>
    <li class="mainMenu">
      <a href="../../src/Pages/support.html">SUPPORT</a>
    </li>
    <div class="email">
      <a href="../../src/Pages/support.html">
        <span class="gradient-icon">
          <i class="fa-regular fa-paper-plane"></i>
        </span>
        <span>Contact</span>
      </a>
    </div>
  </ul>

  <div class="sideMenu">
    <img class="menuIcon" src="../../public/Icon/menuBlack.png" alt="menu" />
    <img class="menuIconClose" src="../../public/Icon/menuclose.png" alt="menu" />
    <div class="sideMenuAll">
      <div>
      <p>Sitemap</p>
        <ul>
          <a href="../../index.html"><li>HOME</li></a>
          <a href="../../src/Pages/about.html"><li>ABOUT</li></a>
          <a href="../../src/Pages/business.html"><li>BUSINESS</li></a>
          <a href="../../src/Pages/support.html"><li>SUPPORT</li></a>
        </ul>
      </div>
    </div>
  </div>
</div>
</header>
`;
headerSpace.innerHTML = headerCont;

let footerSpace = document.querySelector("#footer");
let footerCont = `
<footer>
<div>
  <div class="footerLeft">
    <a href="../../index.html"
      ><img src="../../public/Images/logoWhite.png" alt="logo"
    /></a>
    <p>
      <span>본사</span>경남 창원시 마산회원구 봉암북 7길 21, 6동 303호
    </p>
    <p><span>연구소</span>경남 창원시 마산회원구 합성옛길 288, 1층</p>
    <br />
    <p>TEL : 055-609-1909 <span></span> E-mail : one@bestco.kr</p>
    <br />
    <p>© 2023. TheCompany inc. all rights reserved.</p>
  </div>
  <ul class="footerRight">
    <span></span>
    <a href="../../src/Pages/about.html"><li>ABOUT</li></a>
    <a href="../../src/Pages/business.html"><li>BUSINESS</li></a>
    <a href="../../src/Pages/support.html"><li>SUPPORT</li></a>
  </ul>
</div>
</footer>
`;
footerSpace.innerHTML = footerCont;
