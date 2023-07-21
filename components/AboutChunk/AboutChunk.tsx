import { AboutChunkTypes } from "@/types/components/AboutChunk";
import Image from "next/image";
import React from "react";

const AboutChunk: React.FC<AboutChunkTypes> = ({ emoteurl, title, text }) => {
  return (
    <div className="py-8 px-4 bg-support-200 rounded">
      <Image
        src={emoteurl}
        alt={`Emoji de ${title}`}
        width={32}
        height={32}
        className="block mx-auto"
      />
      <h2 className="mt-2 mb-3 text-support-1000 font-semibold text-2xl leading-snug text-center">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default AboutChunk;
