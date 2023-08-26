"use client";

import { ImageOptimization } from "@/components/ImageOptimization";
import React from "react";

const ProjectImage = ({ src }: { src: string | undefined }) => {
  return (
    <ImageOptimization
      src={src ?? ""}
      qualityControl={500}
      alt="Imagem ilustrativa do projeto"
      width={window.innerWidth}
      height={window.innerHeight}
      priority={false}
    />
  );
};

export default ProjectImage;
