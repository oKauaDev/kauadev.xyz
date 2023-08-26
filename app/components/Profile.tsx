import ButtonAction from "@/components/ButtonAction";
import { ImageOptimization } from "@/components/ImageOptimization";
import React from "react";

export const Profile = () => {
  return (
    <section>
      <ImageOptimization
        src="/perfil.webp"
        qualityControl={300}
        alt="Foto de perfil"
        className="rounded-full mx-auto block"
        width={200}
        height={200}
        priority
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
  );
};
