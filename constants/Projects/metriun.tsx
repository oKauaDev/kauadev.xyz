import { ProjectTypes } from "@/types/constants/projects";

const metriun: ProjectTypes = {
  name: "Metriun",
  img: "/projects/metriun.webp",
  smallDescription:
    "Um site de gráficos para facilitar a administração e a tomada de decisões da sua empresa",
  technologies: ["Next.JS", "UI/UX", "TailwindCSS", "Typescript", "Prisma"],
  link: "https://metriun.com",
  description: (
    <>
      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 dark:text-support-100">
        Sobre o projeto
      </h2>
      <p className="text-support-900 leading-normal dark:text-support-300">
        Metriun não foi apenas um projeto, mas uma empresa que está online. Ela
        é meu primeiro empreendimento como desenvolvedor full-stack, um projeto
        ambicioso que possibilitou o controle dos dados da plataforma por meio
        de gráficos, tornando a tomada de decisões muito mais fácil e eficiente.
        A jornada foi repleta de aprendizado e crescimento, e a experiência de
        criar algo tão impactante impulsionou minha paixão pelo desenvolvimento
        e abriu portas para novas oportunidades no mundo profissional.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10 dark:text-support-100">
        Construção
      </h2>
      <p className="text-support-900 leading-normal mb-10 dark:text-support-300">
        Toda a construção da Metriun foi baseada no Next.js, usando a versão
        13/14 com a pasta app, o banco de dados foi criaod usando Prisma,
        utilizei do framework TailwindCSS para a estilização, foi algo difícil e
        complicado de ser implementado, mas que graças a isso consegui bastante
        experiência para criar grandes projetos.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10 dark:text-support-100">
        O que aprendi
      </h2>
      <p className="text-support-900 leading-normal mb-10 dark:text-support-300">
        Nesse projeto, aprimorei meus conhecimentos em Next.js e um pouco de
        arquitetura de software, o que trouxe mais segurança e robustez ao
        desenvolvimento. A jornada de aprendizado foi empolgante e reveladora,
        permitindo-me adquirir habilidades valiosas que impulsionarão meu
        crescimento como desenvolvedor. Estou animado para continuar explorando
        e aplicando esses conhecimentos em futuros projetos desafiadores.
      </p>
    </>
  ),
};

export default metriun;
