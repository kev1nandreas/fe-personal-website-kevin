import { ReactNode } from "react";

export const ColorfulButton = ({
  children,
  rounded,
  hoverActive,
}: {
  children: ReactNode;
  rounded: "full" | "large";
  hoverActive: boolean;
}) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center p-[2px] cursor-pointer transition-all duration-300 min-w-[8rem] 
      ${
        hoverActive &&
        "hover:scale-105 hover:shadow-[0_0_8px_rgba(139,92,246,0.8)]"
      }
      ${rounded === "full" ? "rounded-full" : "rounded-lg"}`}
    >
      <span
        className={`absolute inset-0 bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 min-w-[8rem] 
        transition-all duration-300 ease-in-out
        ${hoverActive && "group-hover:blur-sm group-hover:opacity-80"}
        
        ${rounded === "full" ? "rounded-full" : "rounded-lg"}`}
      ></span>
      <span
        className={`relative px-8 py-2 bg-[#171717] text-white font-medium min-w-[8rem] 
        transition-all duration-300
        ${hoverActive && "hover:text-yellow-200"}
        ${rounded === "full" ? "rounded-full" : "rounded-lg"}`}
      >
        {children}
      </span>
    </button>
  );
};
