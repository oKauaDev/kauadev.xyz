import NavBar from "./modules/Navbar.js";
import ScrollAnime from "./modules/ScrollAnime.js";
import Slide from "./modules/Slide.js";
import typewriter from "./modules/typewriter.js";

const navbar = new NavBar("header nav", "[data-mobile-menu]");
navbar.init();

typewriter("header > p").write();

const slide = new Slide(".scroll-container", ".scroll-container .scroll");
slide.init();

const scrollAnime = new ScrollAnime("[data-animeScroll]");
scrollAnime.init();

const dino = document.querySelector(".dinossauro");
const cafe = document.querySelector(".cafe");
scrollAnime.checkPosOnTop(
  dino,
  () => {
    cafe.classList.add("ativo");
  },
  () => {
    if (cafe.classList.contains("ativo")) {
      cafe.classList.remove("ativo");
    }
  }
);
