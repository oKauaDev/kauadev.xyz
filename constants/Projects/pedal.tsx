import { ProjectTypes } from "@/types/constants/projects";

const pedal: ProjectTypes = {
  name: "Pedal",
  img: "/projects/pedal.webp",
  smallDescription:
    "Um site de aluguel de bicicletas fictício, feito para treinar meu TailwindCSS.",
  technologies: ["TailwindCSS", "React.JS", "Typescript", "UI/UX"],
  source: "https://github.com/oKauaDev/Pedal",
  link: "https://pedal.kauadev.site",
  description: (
    <>
      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 dark:text-support-100">
        Sobre o projeto
      </h2>
      <p className="text-support-900 leading-normal dark:text-support-300">
        O projeto Pedal é um site fictício de aluguel de bicicletas, oferecendo
        um sistema de pagamento por hora de uso. Enfrentei o desafio de aprender
        e utilizar o Tailwind CSS pela primeira vez nesse projeto. Essa
        experiência foi realmente incrível, pois o Tailwind CSS possibilitou-me
        estilizar o site de forma ágil e eficiente, resultando em um design
        moderno e atrativo. Aprender essa ferramenta abriu novas possibilidades
        para aprimorar meus projetos futuros e aprofundar ainda mais minhas
        habilidades como desenvolvedor web. Estou ansioso para continuar
        explorando o mundo do Tailwind CSS e aplicá-lo em outros desafios
        emocionantes.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10 dark:text-support-100">
        O que aprendi
      </h2>
      <p className="text-support-900 leading-normal mb-10 dark:text-support-300">
        Nesse projeto, tive a oportunidade de mergulhar nos fundamentos do
        Tailwind CSS e aprender como utilizá-lo de forma eficaz. Com dedicação e
        prática, adquiri uma compreensão sólida dessa ferramenta e suas
        principais funcionalidades. A experiência foi enriquecedora,
        proporcionando-me as bases necessárias para aplicar o Tailwind CSS em
        projetos futuros e criar interfaces atraentes e responsivas de maneira
        mais eficiente. Estou empolgado para continuar aprimorando minhas
        habilidades e explorar todo o potencial que o Tailwind CSS tem a
        oferecer.
      </p>
    </>
  ),
};

export default pedal;
