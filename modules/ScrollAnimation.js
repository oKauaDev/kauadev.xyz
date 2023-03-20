export default class ScrollAnimation {
  constructor(porcentage, elementsX, activeClass) {
    // Calcular a poncentagem da tela.
    this.windowMetade = window.innerHeight * (porcentage / 100);

    // Verificar se foi enviado uma array de seletores, se não foi vai definir como []
    if (!elementsX) {
      this.elements = [];
    } else {
      this.elements = elementsX;
    }

    // Aqui vai criar a variavel onde vai os Elementos
    const newElements = [];

    // Vai pegar os Elementos pelos seletores
    this.elements.forEach((r) => {
      // Aqui pode parecer meio complexo.

      const elements = [...document.querySelectorAll(r)];
      newElements.push(...elements);
    });

    this.elements = newElements;

    this.activeClass = "active";

    if (activeClass) {
      this.activeClass = activeClass;
    }

    this.addScrollEvent = this.addScrollEvent.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  addScrollEvent() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll() {
    this.elements.forEach((element) => {
      if (window.scrollY > element.offsetTop - this.windowMetade) {
        // Se tiver um backkback nesse seletor vai executar ele.
        if (!element.classList.contains(this.activeClass)) {
          element.classList.add(this.activeClass);
        }
      } else if (element.classList.contains(this.activeClass)) {
        element.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    this.addScrollEvent();
    this.onScroll();
  }
}
