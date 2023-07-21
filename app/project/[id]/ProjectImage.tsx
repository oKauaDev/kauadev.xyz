"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectImage = ({ src }: { src: string | undefined }) => {
  const router = useRouter();

  if (!src) {
    router.push("/");
  }

  return (
    <Image
      src={src ?? ""}
      alt="Imagem ilustrativa do projeto"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default ProjectImage;
