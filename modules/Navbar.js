export default function Navbar(nav, toggleCallback) {
  const navElement = document.querySelector(nav);

  function onOpenClick() {
    if (navElement.classList.contains("open")) {
      navElement.classList.remove("open");
      document.body.style.overflow = "auto";
    } else {
      navElement.classList.add("open");
      document.body.style.overflow = "hidden";
      window.scroll(0, 0);
    }

    if (toggleCallback) {
      toggleCallback();
    }
  }

  function toggleIn(button) {
    const btn = document.querySelector(button);
    btn.addEventListener("touchstart", onOpenClick);
  }

  return {
    toggleIn,
  };
}
