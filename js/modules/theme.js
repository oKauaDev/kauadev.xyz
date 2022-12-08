export default function initTheme() {}

/*
 0 - white
 1 - black
*/

const logo = document.querySelector(".icon");
const themeSelectorImage = document.querySelector("[data-theme]");

let theme = 0;
function themeAlter() {
  switch (theme) {
    case 0:
      document.body.classList.remove("black");
      document.body.classList.add("white");
      theme = 1;
      logo.setAttribute("src", "assets/white/Logo.svg");
      themeSelectorImage.setAttribute("src", "assets/white/themeSelector.svg");
      break;
    case 1:
      document.body.classList.add("black");
      document.body.classList.remove("white");
      logo.setAttribute("src", "assets/black/Logo.svg");
      themeSelectorImage.setAttribute("src", "assets/black/themeSelector.svg");

      theme = 0;
      break;
  }
}

const themeSelector = document.querySelector("[data-theme]");
themeSelector.addEventListener("click", themeAlter);
