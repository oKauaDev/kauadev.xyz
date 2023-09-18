import ButtonAction from "@/components/ButtonAction";
import { ImageOptimization } from "@/components/ImageOptimization";
import React from "react";
import { DataProp, PersonalData } from "./PersonalData";
import Image from "next/image";
import { Svg } from "@/components/Svg";

export const Profile = () => {
  const personalData: DataProp[] = [
    {
      title: "Disponível",
      icon: (
        <Svg
          src="./mala.svg"
          className="text-support-800 dark:text-support-400"
        />
      ),
    },
    {
      title: "May 10th",
      icon: (
        <Svg
          src="./bolo.svg"
          className="text-support-800 dark:text-support-400"
        />
      ),
    },
    {
      title: "Started in 2021",
      icon: (
        <Svg
          src="./calendario.svg"
          className="text-support-800 dark:text-support-400"
        />
      ),
    },
  ];

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
      <h1 className="text-center mt-5 text-4.5xl leading-tight font-bold tracking-wider dark:text-support-100">
        Kauã Braz
      </h1>
      <p className="leading-relaxed text-support-900 text-center mt-5 dark:text-support-300 mb-8">
        Desenvolvedor front-end e entusiasta da programação.
      </p>
      <PersonalData data={personalData} />
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
