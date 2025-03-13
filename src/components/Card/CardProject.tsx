import Image from "next/image";
import { Typography } from "../Typography";
import { FaArrowRight } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import Link from "next/link";
import { Button } from "../Button/Button";
import { IconDescription } from "../IconDescription";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardProjectProps {
  index: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
  image: string;
  finished?: boolean;
}

export const CardProject = ({
  index,
  title,
  description,
  techStack,
  link,
  github,
  image,
  finished,
}: CardProjectProps) => {
  AOS.init({
    duration: 1000,
  });

  return (
    <div
      data-aos={"fade-up"}
      className="flex flex-col justify-center items-center md:flex-row gap-15 p-5 rounded-2xl relative overflow-hidden"
      style={{ borderColor: "rgba(255, 255, 255, 0.05)", borderWidth: 1 }}
    >
      {index === 0 && (
        <div className="absolute flex select-none justify-center items-center bg-gradient-to-r from-yellow-500 to-yellow-500 via-yellow-300 text-gray-700 h-fit w-[20rem] font-semibold text-xl -rotate-45 -left-25 top-10">
          <FaFireAlt className="text-xl mr-2" />
          Latest
        </div>
      )}

      {/* Image Left */}
      <Image
        onClick={() => window.open(link)}
        src={image}
        alt={title}
        width={400}
        height={400}
        draggable={false}
        className={`pointer-events-none select-none border-2 rounded-2xl w-full object-cover md:w-fit md:h-fit cursor-pointer ${
          index % 2 === 0 ? "" : "md:hidden"
        }`}
      ></Image>

      <div className="max-w-[40rem] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Typography text={"h4"} className="text-2xl">
            {title}
          </Typography>

          {/* Work In Progress */}
          {finished === false && (
            <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold bg-gradient-to-r from-gray-500 to-gray-500 via-gray-300 p-1 px-3 max-w-[10rem] justify-center rounded-lg">
              <IoIosConstruct className="text-lg" />
              In Progress
            </div>
          )}
        </div>

        <Typography text={"body"} className="opacity-80 text-justify">
          {description}
        </Typography>
        <div className="flex gap-2 items-center my-3">
          <Typography className="text-sm mr-3">Tech Stack: </Typography>
          {techStack.map((tech, index) => (
            <IconDescription key={index} name={tech} size={"2xl"} />
          ))}
        </div>
        <div
          className={`flex items-center ${
            github ? "justify-between" : "justify-end"
          }`}
        >
          {github && (
            <Link href={github} target="_blank">
              <IconDescription name={"github-r"} size={"lg"} />
            </Link>
          )}
          <Button
            button={"secondary_outline"}
            className="flex gap-2"
            onClick={() => window.open(link)}
          >
            Visit Website{" "}
            <span>
              <FaArrowRight className="text-xl" />
            </span>
          </Button>
        </div>
      </div>

      {/* Image Right */}
      <Image
        onClick={() => window.open(link)}
        src={image}
        alt={title}
        width={400}
        height={400}
        draggable={false}
        className={`pointer-events-none select-none border-2 rounded-2xl w-full object-cover md:w-fit md:h-fit cursor-pointer ${
          index % 2 !== 0 ? "hidden md:block" : "hidden md:hidden"
        }`}
      />
    </div>
  );
};
