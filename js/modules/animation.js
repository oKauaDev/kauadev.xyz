export default function initAnimation() {
  const animateElements = document.querySelectorAll("[data-anime]");
  const animateOf = window.innerHeight * 0.7;
  onScroll();
  function onScroll() {
    animateElements.forEach((item) => {
      const toTop = item.getBoundingClientRect().top;
      if (toTop - animateOf < 0) {
        item.classList.add("ativo");
      } else {
        item.classList.remove("ativo");
      }
    });
  }

  addEventListener("scroll", onScroll);
}
