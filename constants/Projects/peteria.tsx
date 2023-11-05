import { ProjectTypes } from "@/types/constants/projects";

const peteria: ProjectTypes = {
  name: "PeterIA",
  img: "/projects/peteria.webp",
  smallDescription:
    "PeterIA, um site de um Bot com uma inteligência artificial incrível!",
  technologies: ["NextJS", "TailwindCSS", "TypeScript", "NextAuth", "UI/UX"],
  link: "https://peteria.site",
  description: (
    <>
      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 dark:text-support-100">
        Sobre o projeto
      </h2>
      <p className="text-support-900 leading-normal dark:text-support-300">
        Este é um projeto real que atualmente está online. Este site foi feito
        absolutamente do zero e foi um projeto trabalhoso, uma vez que foi a
        primeira vez que trabalhei com a API do Discord. Foi uma boa experiência
        de aprendizado.
      </p>

      <h2 className="text-3xl font-bold text-support-1000 tracking-wider mb-4 mt-10 dark:text-support-100">
        O que aprendi
      </h2>
      <p className="text-support-900 leading-normal mb-10 dark:text-support-300">
        Após concluir esse projeto, compreendi melhor os fundamentos e conceitos
        do NextAuth. Aprendi bastante sobre a API do Discord e como utilizá-la.
        Também estou mais consciente de como funciona o sistema de cache de
        requisições do Next.js, o que é muito útil no dia a dia e faz o site
        ganhar tempo significativo no carregamento. Além disso, adquiri mais
        conhecimento sobre otimização.
      </p>
    </>
  ),
};

export default peteria;
