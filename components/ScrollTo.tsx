"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const ScrollTo = () => {
  const params = useSearchParams();
  React.useEffect(() => {
    setTimeout(() => {
      const navTO = params.getAll("s")[0];
      const element = document.getElementById(navTO);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 350);
  }, [params]);

  return null;
};

export default ScrollTo;
