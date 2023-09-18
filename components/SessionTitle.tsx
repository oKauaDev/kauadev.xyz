import { SessionTitleProps } from "@/types/components/SessionTitle";
import React from "react";

const SessionTitle: React.FC<SessionTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-sm font-bold tracking-wider text-support-600 uppercase dark:text-support-300">
        {subtitle}
      </h1>
      <h2 className="text-3xl leading-snug tracking-wider font-bold text-support-900 mt-1 dark:text-support-200">
        {title}
      </h2>
    </>
  );
};

export default SessionTitle;
