const navbarButton = document.getElementById("hamburger");
const navbarDiv = document.querySelector("header .navbar");

function closeNavbar() {
  if (navbarDiv.classList.contains("open")) {
    navbarDiv.classList.remove("open");
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "auto";
    scrollTo(0, 0);
  }
}

navbarButton.addEventListener("click", () => {
  navbarDiv.classList.toggle("open");
  if (navbarDiv.classList.contains("open")) {
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
    scrollTo(0, 0);

    window.addEventListener("click", (event) => {
      if (
        event.target.tagName != "UL" &&
        event.target.tagName != "LI" &&
        event.target.tagName != "LABEL"
      ) {
        closeNavbar();
      }
    });
  } else {
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "auto";
    scrollTo(0, 0);
    window.removeEventListener("click");
  }
});

const certificados = document.querySelectorAll(
  "section.certificados .certificates .all-certificados .certificate-item"
);

const certificateView = document.getElementById("certificado0");

certificados.forEach((Element) => {
  Element.addEventListener("mouseenter", (event) => {
    let target = event.target;
    certificateView.src = target.getAttribute("certificate");
  });
});
