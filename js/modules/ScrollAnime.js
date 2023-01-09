import debounce from "./helper/debounce.js";

export default class ScrollAnime {
  constructor(animeData) {
    this.animeElements = [...document.querySelectorAll(animeData)];

    this.checkOnTop = {};
  }

  checkAnime(element) {
    if (element.offsetTop / 1.6 < window.scrollY) {
      element.classList.add("anime");
    } else {
      element.classList.remove("anime");
    }

    const checkOnTopKeys = Object.keys(this.checkOnTop);
    checkOnTopKeys.forEach((item) => {
      if (this.checkOnTop[item].element.offsetTop < window.scrollY) {
        this.checkOnTop[item].toTopcallback();
      } else {
        this.checkOnTop[item].noTopcallback();
      }
    });
  }

  checkPosOnTop(element, toTopcallback, noTopcallback) {
    this.checkOnTop[Object.keys(this.checkOnTop).length + 1] = {
      element,
      toTopcallback,
      noTopcallback,
    };
  }

  init() {
    window.addEventListener("scroll", () => {
      debounce(() => {
        this.animeElements.forEach((element) => {
          this.checkAnime(element);
        });
      }, 200).run();
    });
  }
}
