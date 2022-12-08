export default function initdivbackgroudImage() {}

const divSrc = document.querySelectorAll("div[src]");
divSrc.forEach((div) => {
  div.style.background = "url(../../" + div.getAttribute("src") + ")";
});
