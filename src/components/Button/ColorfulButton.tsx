import { ReactNode } from "react";

export const ColorfulButton = ({
  children,
  rounded,
}: {
  children: ReactNode;
  rounded: "full" | "large";
}) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center p-[2px] cursor-pointer transition-all duration-200 ${
        rounded === "full" ? "rounded-full" : "rounded-lg"
      }`}
    >
      <span
        className={`absolute inset-0 bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 ${
          rounded === "full" ? "rounded-full" : "rounded-lg"
        }`}
      ></span>
      <span
        className={`relative px-8 py-2 bg-[#171717] text-white font-semibold ${
          rounded === "full" ? "rounded-full" : "rounded-lg"
        }`}
      >
        {children}
      </span>
    </button>
  );
};
