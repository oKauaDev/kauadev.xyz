import AboutChunk from "@/components/AboutChunk";
import SessionTitle from "@/components/SessionTitle";
import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section className="mt-vh160px" id="sobre">
      <SessionTitle title="Sobre mim" subtitle="veja um pouco" />
      <div className="grid grid-cols-3 gap-8 mt-8 lg:grid-cols-2 sm:flex sm:flex-col">
        <AboutChunk
          emoteURL="/pc.webp"
          title="Programador"
          text={
            <>
              Sou desenvolvedor front-end e tenho conhecimento nas linguagens de
              programação <span className="text-primary-300">JavaScript</span>,{" "}
              <span className="text-primary-300">TypeScript</span> e{" "}
              <span className="text-primary-300">PHP</span>, caso seja
              necessário desenvolver um back-end simples.
            </>
          }
        />

        <AboutChunk
          emoteURL="/pintura.webp"
          title="Designer UI/UX"
          text={
            <>
              Como designer, crio telas com diferentes{" "}
              <span className="text-primary-300">temas</span> e{" "}
              <span className="text-primary-300">formatos</span>, priorizando a
              interatividade do usuário e buscando entregar o melhor resultado
              logo após a abertura do site.
            </>
          }
        />

        <AboutChunk
          emoteURL="/estudante.webp"
          title="Estudante"
          text={
            <>
              Ainda sou estudante de{" "}
              <span className="text-primary-300">ensino médio</span>, porém já
              fiz <span className="text-primary-300">cursos externos</span> de
              design e programação. Continuo estudando para me manter atualizado
              nesse mercado em constante evolução.
            </>
          }
        />
      </div>
      <h2 className="font-bold text-2xl text-support-800 tracking-wider text-center mt-[3.75rem]">
        O QUE USO PARA TRABALHAR
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-[3.75rem] mt-5 md:gap-8 sm:gap-4">
        <div className="flex items-center gap-4">
          <Image src="/react.svg" alt="React logo" width={32} height={32} />
          <p className="font-semibold tracking-wide leading-8">React.JS</p>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="/tailwindcss.svg"
            alt="TailwindCSS logo"
            width={32}
            height={32}
          />
          <p className="font-semibold tracking-wide leading-8">TailwindCSS</p>
        </div>

        <div className="flex items-center gap-4">
          <Image src="/nextjs.svg" alt="Next logo" width={32} height={32} />
          <p className="font-semibold tracking-wide leading-8">Next.JS</p>
        </div>

        <div className="flex items-center gap-4">
          <Image src="/vuejs.svg" alt="Vue logo" width={32} height={32} />
          <p className="font-semibold tracking-wide leading-8">Vue.JS</p>
        </div>
      </div>
    </section>
  );
};
