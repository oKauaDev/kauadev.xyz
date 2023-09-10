"use client";

import React from "react";
import { ReactSVG } from "react-svg";

export const Svg = ({ src, ...args }: any) => {
  return <ReactSVG src={src} {...args} />;
};
