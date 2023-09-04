"use client";

import { Context } from "@/contexts/Context";
import React from "react";

export const Loading = () => {
  const context = React.useContext(Context);

  if (!context?.loading) {
    return null;
  }

  return (
    <div className="fixed w-screen h-screen bg-black bg-opacity-80 flex items-center justify-center left-0 top-0 z-50 box-border">
      <span className="w-12 h-12 border-[5px] border-white border-solid rounded-[50%] inline-block box-border relative after:absolute after:w-12 after:h-12 after:border-[5px] after:border-white after:border-solid after:rounded-[50%] after:inline-block after:box-border after:left-2/4 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:top-2/4 animate-pulse after:animate-scaleUp"></span>
    </div>
  );
};
