"use client";

import { ReactSVG } from "react-svg";
import Link from "next/link";
import React from "react";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const theme = useTheme();

  const activeNav = {
    nav: "md:w-3/4 md:px-vw64px",
    label:
      "border-none after:rotate-45 before:rotate-[135deg] after:-top-[4.5px]",
  };

  const desativeNav = {
    nav: "md:invisible md:w-0",
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (nav) {
        window.document.body.style.overflow = "hidden";
        window.scroll(0, 0);
      } else {
        window.document.body.style.overflow = "auto";
      }
    }
  }, [nav]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "auto";
    }
  }, []);

  return (
    <header className="flex items-center justify-between w-full">
      <Link
        href="/"
        className="bg-primary-100 px-3 py-1 rounded text-primary-400 text-xl"
      >
        Kauã
      </Link>
      <nav
        className={`flex gap-8 items-center md:h-full md:visible md:flex-col md:gap-4 md:items-start md:fixed md:pt-[60px] md:bg-white dark:md:bg-support-1000 md:z-50 md:left-0 md:top-0 md:transition-all md:duration-300 md:shadow-navbar md:overflow-hidden ${
          nav ? activeNav.nav : desativeNav.nav
        }`}
      >
        <Link
          onPointerDown={() => setNav(false)}
          href="/?s=sobre"
          className="block text-xl font-medium leading-tight whitespace-nowrap dark:text-support-100"
        >
          Sobre mim
        </Link>
        <Link
          onPointerDown={() => setNav(false)}
          href="/project"
          className="block text-xl font-medium leading-tight dark:text-support-100"
        >
          Projetos
        </Link>
        <Link
          onPointerDown={() => setNav(false)}
          href="/?s=contact"
          className="block text-xl font-medium leading-tight dark:text-support-100"
        >
          Contato
        </Link>
        <ReactSVG
          className="cursor-pointer text-support-1000 dark:text-support-100"
          src={
            theme.value !== "dark"
              ? "/moon-fill 1.svg"
              : "brightness-high-fill 1.svg"
          }
          width={24}
          height={24}
          onClick={theme.toggleTheme}
        />
      </nav>
      <label
        className={`hidden md:block border-t border-support-1000 w-5 after:h-[1px] after:w-full after:bg-support-1000 after:block before:h-[1px] before:w-full before:bg-support-1000 before:my-1 before:block after:relative after:transition-transform after:duration-300 before:transition-transform before:duration-300 ${
          nav ? activeNav.label : ""
        } dark:border-support-100 dark:after:bg-support-100 dark:before:bg-support-100`}
        onClick={() => setNav((e) => !e)}
      />
    </header>
  );
};

export default Navbar;
