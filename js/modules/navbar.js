export default function initNavbar() {
  const header = document.querySelector(".container header");
  const button = document.querySelector("[data-menu-hamburguer]");
  const links = document.querySelectorAll("ul.navbar li a");

  function toggleNavbar() {
    header.classList.toggle("open");

    if (header.classList.contains("open")) {
      scrollTo(0, 0);
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "auto";
  }

  function closeOnAirClick(event) {
    if (header.classList.contains("open")) {
      if (event.target.tagName != "UL" && event.target.tagName != "LABEL") {
        toggleNavbar();
      }
    }
  }

  button.addEventListener("click", toggleNavbar);
  addEventListener("click", closeOnAirClick);
  links.forEach((Item) => {
    Item.addEventListener("click", toggleNavbar);
  });
}
