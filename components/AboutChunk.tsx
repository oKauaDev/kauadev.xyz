import { AboutChunkTypes } from "@/types/components/AboutChunk";
import Image from "next/image";
import React from "react";

const AboutChunk: React.FC<AboutChunkTypes> = ({ emoteURL, title, text }) => {
  return (
    <div className="py-8 px-4 bg-support-200 rounded dark:bg-support-900">
      <Image
        src={emoteURL}
        alt={`Emoji de ${title}`}
        width={32}
        height={32}
        className="block mx-auto w-8 h-8"
      />
      <h2 className="mt-2 mb-3 text-support-1000 font-semibold text-2xl leading-snug text-center dark:text-support-100">
        {title}
      </h2>
      <p className="dark:text-support-200">{text}</p>
    </div>
  );
};

export default AboutChunk;
