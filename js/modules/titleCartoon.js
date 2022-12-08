export default function initCartoonTitle() {
  const titleCartoon = document.querySelector("[data-title-cartoon]");
  const text = titleCartoon.innerText;
  titleCartoon.innerText = "";
  text.split("").forEach((letra, i) => {
    const span = document.createElement("span");
    span.classList.add("letterCartoon");
    span.innerText = letra;
    setTimeout(() => titleCartoon.appendChild(span), i * 75);
  });
}
