import { ProjectTypes } from "@/types/constants/projects";

const capsnews: ProjectTypes = {
  name: "CapsNews",
  img: "/projects/capsnews.png",
  smallDescription:
    "Um clone do site TabNews, onde você pode realizar postagens sobre assuntos de tecnologia.",
  technologies: [
    "Next.JS",
    "PHP",
    "UI/UX",
    "Laravel",
    "Typescript",
    "TailwindCSS",
  ],
  source: "https://github.com/oKauaDev/CapsNews",
  description: (
    <>
      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4">
        Sobre o projeto
      </h2>
      <p className="text-support-900 leading-normal">
        O CapsNews marcou minha estreia no desenvolvimento com Next.JS, sendo um
        projeto aparentemente simples, mas repleto de desafios para um iniciante
        como eu. Enfrentei-os de frente e mergulhei no aprendizado necessário
        para superá-los. A experiência adquirida foi inestimável para meu
        crescimento profissional no mundo do Next.JS.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10">
        Back-end
      </h2>
      <p className="text-support-900 leading-normal mb-10">
        Nesse projeto, enfrentei o desafio de criar um back-end, embora meu foco
        principal não fosse nessa área. Por conta disso, optei por não
        disponibilizá-lo no GitHub. No entanto, posso destacar que desenvolvi o
        projeto utilizando Laravel e PHP, o que me proporcionou uma valiosa
        experiência na construção de aplicações nesse ambiente.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10">
        O que aprendi
      </h2>
      <p className="text-support-900 leading-normal mb-10">
        Através dessa incrível jornada, adquiri um domínio mais sólido no
        Next.JS e a habilidade de criar banco de dados SQL no Laravel. Essa
        experiência enriquecedora me capacitou a utilizar o Next.JS para
        desenvolver aplicativos de grande porte com confiança e eficiência.
        Estou animado com as possibilidades que esse conhecimento proporciona
        para o meu crescimento profissional.
      </p>
    </>
  ),
};

export default capsnews;
