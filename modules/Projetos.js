const projects = [
  {
    name: "Dogs",
    description:
      "Uma rede social para cachorro feita em react em um curso onde aprendi o mesmo framework, utilizei apenas React e uma biblioteca de gráficos, nesse projeto aprendi o frameworks, scroll-infinito e muito mais.",
    tec: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Ranek",
    description:
      "Um Site de vendas de produtos fictícios, nesse projeto fiz o site em Vue.js, não fiz nenhuma responsividade nele, apenas treinei meu Vue.js, fiz a API dele também em PHP do zero, aqui aprendi muito sobre o Vue.js e sobre API REST com PHP.",
    tec: ["Vue.js", "JavaScript", "HTML", "CSS", "PHP"],
  },
  {
    name: "Animais Fantasticos",
    description:
      "Um site feito no meu curso de JavaScript, aqui foi onde aprendi o JavaScript. Nesse projeto trabalhei bem com a linguagem e conseguir aplicar vários conceitos do mesmo.",
    tec: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "ENP",
    description:
      "Um plugin em PHP para um software de Minecraft Bedrock Edition, esse projeto é simples porem foi nesse software que aprendi o PHP, me aprimorando por 2 anos no mesmo.",
    tec: ["PHP", "Pocketmine-MP"],
  },
  {
    name: "VIEW",
    description:
      'Um site para minificar outros sites, quando fiz esse site tinha apenas conhecimento em PHP, HTML e CSS, porém também usei JavaScript digamos que "Me virando nos 30", esse projeto foi bem legal e aprendi muita coisa com ele.',
    tec: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "PROFILEVIEW",
    description:
      "Esse foi um dos meus primeiros projetos na WEB, foi um projeto relativamente fácil, porem com ele aprendi mais sobre API REST e criei uma que usa de um banco de dados em JSON (Sei que não é o ideal), esse site pega suas estástiticas no Minecraft sendo possível visualizar elas pelo site.",
    tec: ["PHP", "HTML", "CSS"],
  },
];

function isFiltered(array1, array2) {
  let retur = false;
  array1.forEach((r) => {
    if (array2.includes(r)) {
      retur = true;
    }
  });
  return retur;
}

export default function createProjects(containerElement, filterX) {
  const baseFilters = {
    front: ["html", "css", "javascript", "react", "vue.js"],
    back: ["php", "nodejs"],
  };

  let filter = filterX;

  if (!filter) filter = "*";

  const container = document.querySelector(containerElement);

  container.innerHTML = "";

  projects.forEach((project) => {
    const element = document.createElement("div");

    const checkFilters = project.tec.map((r) => r.toLowerCase());
    if (filter === "*" || isFiltered(checkFilters, baseFilters[filter])) {
      let tecs = "";

      element.classList.add("projeto");

      project.tec.forEach((tecnologia) => {
        tecs += `<p>${tecnologia}</p>`;
      });

      element.innerHTML = `
        <h1>${project.name}</h1>
        <p>${project.description}</p>
        <span class="separator"></span>
        <div class="tecs">
          ${tecs}
        </div>
    `;

      container.appendChild(element);
    }
  });
}
