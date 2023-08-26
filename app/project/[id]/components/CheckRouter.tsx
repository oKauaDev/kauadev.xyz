"use client";

import { ProjectTypes } from "@/types/constants/projects";
import { useRouter } from "next/navigation";
import React from "react";

type CheckRouterProps = {
  project: ProjectTypes | undefined;
};

export const CheckRouter = ({ project }: CheckRouterProps) => {
  const router = React.useRef(useRouter());

  React.useEffect(() => {
    if (!project) {
      router.current.push("/");
    }
  }, [project]);

  return null;
};
