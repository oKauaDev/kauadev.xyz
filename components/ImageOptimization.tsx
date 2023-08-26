"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

type ImageOptimizationProps = ImageProps & {
  qualityControl: 100 | 200 | 300 | 400 | 500;
};

export const ImageOptimization = ({
  src,
  alt,
  width,
  height,
  qualityControl = 300,
  ...rest
}: ImageOptimizationProps) => {
  const [clientWidth, setWidth] = React.useState<number | undefined>();

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (!clientWidth) {
    return null;
  }

  const percentage = -((100 / clientWidth) * qualityControl - 100);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...rest}
      quality={percentage <= 5 ? 5 : percentage}
    />
  );
};
