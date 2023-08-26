import SessionTitle from "@/components/SessionTitle";
import React from "react";
import redesociais from "@/constants/redesociais";
import Image from "next/image";
import ButtonAction from "@/components/ButtonAction";

export const Contact = () => {
  return (
    <section className="mt-vh160px" id="contact">
      <SessionTitle title="Contato" subtitle="entre em" />
      <p className="max-w-sm w-full mt-8 text-support-1000">
        Entre em contato comigo pelas minhas redes sociais, Atendo mais rápido
        pelo{" "}
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
      <ButtonAction clickText="EMAIL COPIADO!!" copy="kauacomtil021@gmail.com">
        kauacomtil021@gmail.com
      </ButtonAction>
    </section>
  );
};
