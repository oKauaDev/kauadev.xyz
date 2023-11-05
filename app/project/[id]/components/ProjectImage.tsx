"use client";

import { ImageOptimization } from "@/components/ImageOptimization";
import React from "react";

const ProjectImage = ({ src }: { src: string | undefined }) => {
  function getDimensions() {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    return {
      width: 1280,
      height: 720,
    };
  }

  return (
    <ImageOptimization
      src={src ?? ""}
      qualityControl={500}
      alt="Imagem ilustrativa do projeto"
      width={getDimensions().width}
      height={getDimensions().height}
      priority={false}
    />
  );
};

export default ProjectImage;
