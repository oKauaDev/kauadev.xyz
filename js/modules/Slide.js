import debounce from "./helper/debounce.js";

export default class Slide {
  constructor(wrepper, slide) {
    this.wrepper = document.querySelector(wrepper);
    this.slide = document.querySelector(slide);

    // salvar todas as posições do mouse.
    this.save = {
      clickPosition: 0,
      moveFinalPos: 0,
      finalPos: 0,
    };

    this.settings = {};

    this.preferPosition = {
      prev: 0,
      actual: 0,
      next: 0,
    };

    this.onClick = this.onClick.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onUp = this.onUp.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  setTransicion(bool) {
    if (bool) {
      this.slide.style.transition = "0.5s";
    } else {
      this.slide.style.transition = "none";
    }
  }

  onClick(event) {
    event.preventDefault();
    this.setTransicion(false);
    this.wrepper.addEventListener("mousemove", this.onMove);
    this.wrepper.addEventListener("mouseup", this.onUp);

    // Eventos Mobiles
    this.wrepper.addEventListener("touchmove", this.onMove);
    this.wrepper.addEventListener("touchend", this.onUp);

    if (event.type === "touchstart") {
      this.save.clickPosition = event.changedTouches[0].clientX;
    } else {
      this.save.clickPosition = event.clientX;
    }

    // Envitar futuros bugs
    this.wrepper.addEventListener("mouseleave", this.onLeave);
  }

  onLeave() {
    this.wrepper.removeEventListener("mousemove", this.onMove);
    this.wrepper.removeEventListener("mouseup", this.onUp);

    this.wrepper.removeEventListener("touchmove", this.onMove);
    this.wrepper.removeEventListener("touchend", this.onUp);

    this.save.finalPos = this.save.moveFinalPos;
    this.navTo(this.preferPosition.actual);
  }

  onMove(event) {
    let clientX;
    if (event.type === "touchmove") {
      clientX = event.changedTouches[0].clientX;
    } else {
      clientX = event.clientX;
    }
    // Ok, esse calculo é meio estranho porem vou tentar explicar melhor.
    // Ele irá pegar a ultima posição que você parou
    // e vai somar com a posição do seu click menos a posição atual do
    // seu mouse. e vai inverter de sinal -(conta aqui)
    const moveAt = this.save.finalPos + -(this.save.clickPosition - clientX);
    this.save.moveFinalPos = moveAt;
    this.slide.style.transform = `translate3d(${moveAt}px, 0px, 0px)`;
  }

  onUp(event) {
    let clientX;
    if (event.type === "touchend") {
      clientX = event.changedTouches[0].clientX;
    } else {
      clientX = event.clientX;
    }
    this.wrepper.removeEventListener("mousemove", this.onMove);
    this.wrepper.removeEventListener("mouseup", this.onUp);

    this.wrepper.removeEventListener("touchmove", this.onMove);
    this.wrepper.removeEventListener("touchend", this.onUp);
    this.save.finalPos = this.save.moveFinalPos;

    let mouseMoved = window.innerWidth - window.innerWidth / 1.1;
    if (mouseMoved > 200) {
      mouseMoved = 200;
    }
    if (this.save.clickPosition - clientX > mouseMoved) {
      this.navTo(this.preferPosition.next);
    } else if (this.save.clickPosition - clientX < -mouseMoved) {
      this.navTo(this.preferPosition.prev);
    } else {
      this.navTo(this.preferPosition.actual);
    }
  }

  addBasicEvents() {
    this.wrepper.addEventListener("mousedown", this.onClick);
    this.wrepper.addEventListener("touchstart", this.onClick);
  }

  navTo(index) {
    if (index < this.settings.length && index >= 0) {
      this.setTransicion(true);
      const position = this.settings[index].pos;
      this.removeAtiveClass();
      this.settings[index].element.classList.add("ativa");
      this.slide.style.transform = `translate3d(${position}px, 0px, 0px)`;
      this.save.finalPos = position;

      // eslint-disable-next-line no-param-reassign
      this.preferPosition.prev = index === 0 ? 0 : index - 1;

      this.preferPosition.next =
        index >= this.settings.length - 1
          ? this.settings.length - 1
          : index + 1;

      this.preferPosition.actual = index;
    }
  }

  removeAtiveClass() {
    let { children } = this.slide;
    children = [...children];
    children.forEach((element) => {
      element.classList.remove("ativa");
    });
  }

  initSlideSettings() {
    let { children } = this.slide;
    children = [...children];
    children.forEach((element, i) => {
      const margin = (this.wrepper.offsetWidth - element.offsetWidth) / 2;
      const calculo = -(element.offsetLeft - margin);
      this.settings[i] = {
        pos: calculo,
        element,
      };
      this.settings.length = i + 1;
    });

    this.navTo(0);
  }

  init() {
    this.addBasicEvents();
    setTimeout(() => {
      this.initSlideSettings();
    }, 500);

    window.addEventListener("resize", () => {
      debounce(() => {
        this.initSlideSettings();
      }, 400).run();
    });
  }
}
