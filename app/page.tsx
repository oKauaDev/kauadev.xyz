import AboutChunk from "@/components/AboutChunk/AboutChunk";
import ButtonAction from "@/components/ButtonAction/ButtonAction";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import ScrollTo from "@/components/ScrollTo/ScrollTo";
import SessionTitle from "@/components/SessionTitle/SessionTitle";
import redesociais from "@/constants/redesociais";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="mt-[6.25rem] animation-left">
        <section>
          <Image
            src="/perfil.jpg"
            alt="Foto de perfil"
            className="rounded-full mx-auto block"
            width={200}
            quality={50}
            loading="eager"
            height={200}
          />
          <h1 className="text-center mt-5 text-4.5xl leading-tight font-bold tracking-wider">
            Kauã Braz
          </h1>
          <p className="leading-relaxed text-support-900 text-center mt-5">
            Desenvolvedor front-end e entusiasta da programação.
          </p>
          <ButtonAction
            className="mx-auto mt-10"
            clickText="EMAIL COPIADO!!"
            copy="kauacomtil021@gmail.com"
          >
            ENTRE EM CONTATO
          </ButtonAction>
        </section>
        <section className="mt-vh160px" id="sobre">
          <SessionTitle title="Sobre mim" subtitle="veja um pouco" />
          <div className="grid grid-cols-3 gap-8 mt-8 lg:grid-cols-2 sm:flex sm:flex-col">
            <AboutChunk
              emoteurl="/💻.png"
              title="Programador"
              text={
                <>
                  Sou desenvolvedor front-end e tenho conhecimento nas
                  linguagens de programação{" "}
                  <span className="text-primary-300">JavaScript</span>,{" "}
                  <span className="text-primary-300">TypeScript</span> e{" "}
                  <span className="text-primary-300">PHP</span>, caso seja
                  necessário desenvolver um back-end simples.
                </>
              }
            />

            <AboutChunk
              emoteurl="/🎨.png"
              title="Designer UI/UX"
              text={
                <>
                  Como designer, crio telas com diferentes{" "}
                  <span className="text-primary-300">temas</span> e{" "}
                  <span className="text-primary-300">formatos</span>,
                  priorizando a interatividade do usuário e buscando entregar o
                  melhor resultado logo após a abertura do site.
                </>
              }
            />

            <AboutChunk
              emoteurl="/📚.png"
              title="Estudante"
              text={
                <>
                  Ainda sou estudante de{" "}
                  <span className="text-primary-300">ensino médio</span>, porém
                  já fiz{" "}
                  <span className="text-primary-300">cursos externos</span> de
                  design e programação. Continuo estudando para me manter
                  atualizado nesse mercado em constante evolução.
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
              <p className="font-semibold tracking-wide leading-8">
                TailwindCSS
              </p>
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
        <section className="mt-vh160px" id="projects">
          <SessionTitle title="Projetos" subtitle="olhe meus" />
          <Projects />
        </section>
        <section className="mt-vh160px" id="contact">
          <SessionTitle title="Contato" subtitle="entre em" />
          <p className="max-w-sm w-full mt-8 text-support-1000">
            Entre em contato comigo pelas minhas redes sociais, Atendo mais
            rápido pelo{" "}
            <a
              href="https://discordapp.com/users/668849866805477398"
              className="text-primary-300"
            >
              Discord
            </a>
            !
          </p>
          <div className="mt-6 flex gap-8 items-center">
            {redesociais.map((social, i) => {
              return (
                <a href={social.link} key={i}>
                  <Image
                    src={social.img}
                    alt="Rede Social"
                    width={24}
                    height={24}
                  />
                </a>
              );
            })}
          </div>
          <p className="my-6 text-support-1000">
            Ou se preferir entre em contato comigo pelo email.
          </p>
          <ButtonAction
            clickText="EMAIL COPIADO!!"
            copy="kauacomtil021@gmail.com"
          >
            kauacomtil021@gmail.com
          </ButtonAction>
        </section>
        <footer className="mt-vh160px text-support-1000 text-center">
          Kauã braz. Todos os direitos reservados.
        </footer>
      </div>
      <ScrollTo />
    </section>
  );
}
