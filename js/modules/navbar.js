export default class navBar {
  constructor(listNav, buttonNav) {
    this.listNav = document.querySelector(listNav);
    this.buttonNav = document.querySelector(buttonNav);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  open() {
    this.listNav.classList.add("open");
    document.body.style.overflow = "hidden";
    window.scroll(0, 0);
  }

  close() {
    this.listNav.classList.remove("open");
    document.body.style.overflow = "auto";
  }

  toggle() {
    if (this.listNav.classList.contains("open")) {
      this.close();
    } else {
      this.open();
    }
  }

  init() {
    this.buttonNav.addEventListener("click", this.toggle);
  }
}
