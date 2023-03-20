/* eslint-disable import/extensions */
import NumberAnimation from "./modules/NumberAnimation.js";
import createSkills from "./modules/Skils.js";
import createProjects from "./modules/Projetos.js";
import Navbar from "./modules/Navbar.js";
import ScrollAnimation from "./modules/ScrollAnimation.js";

// Criar a animação nos números
function animeNumber() {
  setTimeout(() => {
    new NumberAnimation([
      {
        element: "#seguidores",
        count: 15,
      },
      {
        element: "#seguindo",
        count: 1,
      },
      {
        element: "#repo",
        count: 11,
      },
    ]).start();
  }, 400);
}

const element = document.querySelector("[animeStatus]");
const mutation = new MutationObserver(animeNumber);
mutation.observe(element, {
  attributes: true,
  childList: false,
  subtree: false,
});

// Criar as skills
createSkills(".skills");

// Criar os projetos
createProjects(".projetos", localStorage.filter ?? undefined);

// Pegar os botões dos projetos
const todos = document.querySelector("#todos");
const front = document.querySelector("#front");
const back = document.querySelector("#back");

let actual = localStorage.filter;

if (!actual) actual = "*";

const actualElement = document.querySelector(`[query="${actual}"]`);
actualElement.classList.add("ativo");

function click(event) {
  const target = event.currentTarget;

  [todos, front, back].forEach((b) => b.classList.remove("ativo"));

  target.classList.add("ativo");

  createProjects(".projetos", target.getAttribute("query"));

  localStorage.filter = target.getAttribute("query");
}

todos.addEventListener("click", click);
front.addEventListener("click", click);
back.addEventListener("click", click);

// Aqui vai ficar a parte do navbar
Navbar("header nav").toggleIn(".mobile-menu");

// Scroll Animation
const ScrollAnime = new ScrollAnimation(60, [
  "[join-animation]",
  "[animeStatus]",
]);

ScrollAnime.init();
