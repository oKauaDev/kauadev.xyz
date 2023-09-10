"use client";

import { ButtonActionProps } from "@/types/components/ButtonAction";
import copyClip from "copy-to-clipboard";
import React from "react";

const ButtonAction: React.FC<ButtonActionProps> = ({
  children,
  copy,
  clickText,
  className,
  ...args
}) => {
  function handleClick(event: React.MouseEvent) {
    event.preventDefault();
    if (copy) {
      copyClip(copy);
    }

    if (event.currentTarget && clickText) {
      const afterText = `${event.currentTarget.innerHTML}`;
      const target = event.currentTarget;
      target.innerHTML = clickText;

      setTimeout(() => {
        if (target) {
          target.innerHTML = afterText;
        }
      }, 1500);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`block w-max bg-primary-100 text-primary-400 uppercase px-5 py-2 font-bold rounded leading-4 text-base cursor-pointer border-2 border-transparent border-solid transition-all duration-300 hover:bg-transparent hover:border-primary-100 dark:hover:text-primary-100 ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default ButtonAction;
