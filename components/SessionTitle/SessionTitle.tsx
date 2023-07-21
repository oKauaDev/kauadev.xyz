import { SessionTitleProps } from "@/types/components/SessionTitle";
import React from "react";

const SessionTitle: React.FC<SessionTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h4 className="text-sm font-bold tracking-wider text-support-500 uppercase">
        {subtitle}
      </h4>
      <h2 className="text-3xl leading-snug tracking-wider font-bold text-support-900 mt-1">
        {title}
      </h2>
    </>
  );
};

export default SessionTitle;
