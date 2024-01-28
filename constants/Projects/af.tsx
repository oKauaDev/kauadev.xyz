import { ProjectTypes } from "@/types/constants/projects";

const af: ProjectTypes = {
  name: "Animais Fantásticos",
  img: "/projects/animais-fantasticos.webp",
  smallDescription:
    "Animais Fantásticos, um site feito no meu curso de Javascript.",
  technologies: ["Javascript"],
  source: "https://github.com/oKauaDev/animais-fantasticos",
  link: "https://animais.kauadev.site",
  description: (
    <>
      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 dark:text-support-100">
        Sobre o projeto
      </h2>
      <p className="text-support-900 leading-normal dark:text-support-300">
        O projeto Animais Fantásticos é fictício, envolvendo o cuidado e
        preservação de criaturas extraordinárias para evitar a extinção.
        Desenvolvido durante meu curso de JavaScript, aprofundei conhecimentos
        sobre o DOM e a linguagem em si. Os desafios complexos propostos, como o
        Slide dos animais, proporcionaram um aprendizado valioso.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10 dark:text-support-100">
        O que aprendi
      </h2>
      <p className="text-support-900 leading-normal mb-10 dark:text-support-300">
        Após a conclusão deste projeto, ganhei um amplo conhecimento em
        JavaScript, o que me permite afirmar com confiança que tenho experiência
        nessa linguagem. O aprendizado obtido foi essencial para meu crescimento
        profissional nessa área.
      </p>
    </>
  ),
};

export default af;
