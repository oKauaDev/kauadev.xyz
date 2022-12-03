function initNavbarAnimation() {
  const navbarLinks = document.querySelectorAll("header ul a");

  let timeOutId = 0;
  let isWrite = true;

  navbarLinks.forEach((Item) => {
    Item.addEventListener("mouseenter", HandleMouseEnter);
    Item.addEventListener("mouseleave", HandleMouseLeave);
  });

  function HandleMouseEnter(event) {
    isWrite = true;
    const target = event.currentTarget;
    let letras = "(x)".split("");
    if (window.innerWidth >= 800) {
      letras = "(select)".split("");
    }
    letras.forEach((letra, i) => {
      timeOutId = setTimeout(() => {
        if (isWrite) target.innerText += letra;
      }, i * 35);
    });
  }

  function HandleMouseLeave(event) {
    isWrite = false;
    clearTimeout(timeOutId);
    const target = event.currentTarget;
    target.innerText = target.getAttribute("data-baseText");
  }
}

function initNavbar() {
  const btnOpenNav = document.querySelector("header label");
  const header = document.querySelector("header");
  const allLinksNavbar = document.querySelectorAll("header ul a");
  const ulNavbar = document.querySelector("header ul");
  allLinksNavbar.forEach((Link) => {
    Link.addEventListener("click", closeNavbar);
  });

  function openNavbar() {
    header.classList.add("open");
    scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    ulNavbar.style.height = document.body.clientHeight + "px";
  }

  function closeNavbar() {
    header.classList.remove("open");
    document.body.style.overflow = "auto";
    ulNavbar.style.height = "auto";
  }

  function handleNavbar() {
    if (header.classList.contains("open")) {
      closeNavbar();
    } else {
      openNavbar();
    }
  }

  btnOpenNav.addEventListener("click", handleNavbar);
}

const progresses = document.querySelectorAll("[data-progress]");

progresses.forEach((Item) => {
  Item.style.width = Item.getAttribute("data-progress");
});

initNavbarAnimation();
initNavbar();
