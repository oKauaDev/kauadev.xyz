"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Custom404 = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/");
  }, [router]);

  return <></>;
};

export default Custom404;
