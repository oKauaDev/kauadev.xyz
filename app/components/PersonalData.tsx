import React from "react";

export interface DataProp {
  icon: React.ReactNode;
  title: string;
}

type PersonalData = {
  data: DataProp[];
};

export const PersonalData = ({ data }: PersonalData) => {
  return (
    <ul className="flex items-center gap-10 justify-center">
      {data.map((dataProp) => {
        return (
          <li
            key={dataProp.title}
            className="flex items-center justify-center gap-3 px-3 py-2 bg-support-200 rounded text-sm font-medium text-support-900 dark:bg-support-900 dark:text-support-200"
          >
            {dataProp.icon} {dataProp.title}
          </li>
        );
      })}
    </ul>
  );
};
