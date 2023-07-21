import React from "react";

type technologies =
  | "React.JS"
  | "Next.JS"
  | "Vue.JS"
  | "PHP"
  | "Laravel"
  | "Javascript"
  | "Typescript"
  | "UI"
  | "UX"
  | "UI/UX"
  | "TailwindCSS";

export interface ProjectTypes {
  name: string;
  smallDescription: string;
  technologies: (technologies | string)[];
  img: string;
  link?: string;
  source?: string;
  description: React.ReactNode | JSX.Element | string;
}

export interface ProjectsTypes {
  [key: string]: ProjectTypes;
}
