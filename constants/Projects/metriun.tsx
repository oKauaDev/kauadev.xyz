import { ProjectTypes } from "@/types/constants/projects";

const metriun: ProjectTypes = {
  name: "Metriun",
  img: "/projects/metriun.webp",
  smallDescription:
    "Um site de gráficos para facilitar a administração e a tomada de decisões da sua empresa",
  technologies: ["React.JS", "PHP", "UI/UX", "Laravel", "Typescript"],
  link: "https://metriun.com",
  description: (
    <>
      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 dark:text-support-100">
        Sobre o projeto
      </h2>
      <p className="text-support-900 leading-normal dark:text-support-300">
        Metriun não foi apenas um projeto, mas uma empresa que de fato ganhou
        vida. Foi meu primeiro empreendimento como desenvolvedor full-stack, um
        projeto ambicioso que possibilitou o controle dos dados da plataforma
        por meio de gráficos, tornando a tomada de decisões muito mais fácil e
        eficiente. A jornada foi repleta de aprendizado e crescimento, e a
        experiência de criar algo tão impactante impulsionou minha paixão pelo
        desenvolvimento e abriu portas para novas oportunidades no mundo
        profissional.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10 dark:text-support-100">
        Front-end
      </h2>
      <p className="text-support-900 leading-normal mb-10 dark:text-support-300">
        No front-end da Metriun, desenvolvi a plataforma utilizando React.JS e
        Typescript, enfrentando diversos desafios fantásticos ao longo do
        caminho. Com determinação e dedicação, conquistei soluções incríveis
        para tornar a experiência do usuário excepcional. A combinação do poder
        do React.JS com a robustez do Typescript permitiu-me criar uma aplicação
        sólida e eficiente, o que me enche de orgulho e entusiasmo para
        enfrentar novos projetos desafiadores no futuro.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10 dark:text-support-100">
        Back-end
      </h2>
      <p className="text-support-900 leading-normal mb-10 dark:text-support-300">
        No desenvolvimento do back-end da Metriun, embarquei em uma jornada
        repleta de desafios, pois esse foi o meu primeiro projeto utilizando
        Laravel. O aprendizado e o domínio dessa tecnologia foram fundamentais
        para garantir o funcionamento eficiente da plataforma. Enfrentei cada
        obstáculo com determinação e, ao final, alcancei um resultado
        gratificante.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10 dark:text-support-100">
        O que aprendi
      </h2>
      <p className="text-support-900 leading-normal mb-10 dark:text-support-300">
        Nesse projeto, vivenciei uma experiência incrível ao aprender a integrar
        o Typescript com o React.JS, o que trouxe mais segurança e robustez ao
        desenvolvimento. Além disso, mergulhei de cabeça no mundo do Laravel,
        uma tecnologia totalmente nova para mim até então. A jornada de
        aprendizado foi empolgante e reveladora, permitindo-me adquirir
        habilidades valiosas que impulsionarão meu crescimento como
        desenvolvedor. Estou animado para continuar explorando e aplicando esses
        conhecimentos em futuros projetos desafiadores.
      </p>
    </>
  ),
};

export default metriun;
