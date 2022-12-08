export default function initPopusModal() {}

const popupsItems = document.querySelectorAll("[data-popup-create]");

function createElement(element) {
  const popup = document.createElement("div");
  popup.innerText = element.getAttribute("aria-label");
  popup.classList.add("popup-item");
  document.body.appendChild(popup);
  popup.style.left = "calc(50% - " + popup.clientWidth / 2 + "px)";

  return popup;
}

function dispathPopup(event) {
  event.preventDefault();
  const popup = createElement(this);
  popupsItems.forEach((item) => {
    item.setAttribute("disabled", "");
  });
  setTimeout(() => {
    popup.remove();
    popupsItems.forEach((item) => {
      item.removeAttribute("disabled", "");
    });
  }, 10000);
}

popupsItems.forEach((item) => {
  item.addEventListener("click", dispathPopup);
});
