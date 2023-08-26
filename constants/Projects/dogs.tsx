import { ProjectTypes } from "@/types/constants/projects";

const dogs: ProjectTypes = {
  name: "Dogs",
  img: "/projects/dogs.webp",
  smallDescription:
    "Uma rede social feita para cachorros, foi um projeto feino no curso de React.JS da Origamid.",
  technologies: ["React.JS"],
  source: "https://github.com/oKauaDev/Dogs",
  link: "https://dogs.kauadev.xyz",
  description: (
    <>
      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4">
        Sobre o projeto
      </h2>
      <p className="text-support-900 leading-normal">
        Dogs marcou o meu primeiro projeto desenvolvido em React.JS, onde
        mergulhei no aprendizado do framework e pude criar aplicativos
        incríveis! A experiência foi desafiadora e gratificante, permitindo-me
        explorar todo o potencial do React.JS e desenvolver soluções
        surpreendentes. Estou entusiasmado com as possibilidades que essa
        jornada abre para mim no mundo do desenvolvimento de aplicativos.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10">
        O que aprendi
      </h2>
      <p className="text-support-900 leading-normal mb-10">
        Após concluir esse projeto, alcancei um novo patamar de conhecimento ao
        aprender a utilizar os Contextos do React, bem como a implementar
        bibliotecas externas. Além disso, fui introduzido à sintaxe JSX, uma
        novidade que nunca havia explorado antes. Essas habilidades adquiridas
        expandiram significativamente meu conjunto de ferramentas como
        desenvolvedor e me deixaram empolgado para aplicá-las em futuros
        projetos.
      </p>
    </>
  ),
};

export default dogs;
