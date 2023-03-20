export default class NumberAnimation {
  constructor(animations) {
    this.animations = animations;
  }

  static anime(element, count) {
    const el = document.querySelector(element);
    for (let i = 1; i <= count; i += 1) {
      setTimeout(() => {
        el.innerText = i;
      }, i * 75);
    }
  }

  start() {
    this.animations.forEach((anime) => {
      NumberAnimation.anime(anime.element, anime.count);
    });
  }
}
