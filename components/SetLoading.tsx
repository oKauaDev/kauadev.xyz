"use client";

import { Context } from "@/contexts/Context";
import React from "react";

type SetLoadingProps = {
  value: boolean;
};

export const SetLoading = ({ value }: SetLoadingProps) => {
  const context = React.useContext(Context);

  React.useEffect(() => {
    context?.setLoading(value);
  }, [value, context]);

  return null;
};
