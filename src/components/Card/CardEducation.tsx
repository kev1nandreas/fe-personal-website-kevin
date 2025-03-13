import Link from "next/link";
import { Typography } from "../Typography";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

type CardEducationProps = {
  title: string;
  major: string;
  logo: string;
  description: string;
  period: string;
  link: string;
};

export const CardEducation = ({
  title,
  major,
  logo,
  description,
  period,
  link,
}: CardEducationProps) => {
  AOS.init({
    duration: 1000,
  });
  
  return (
    <div
      data-aos={"zoom-in"}
      className="flex flex-1 flex-col max-w-[37rem] border-2 rounded-2xl p-5 hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow-500 !transition-all !duration-800 !ease-in-out"
      style={{ borderColor: "rgba(240, 240, 240, 0.1)" }}
    >
      <Typography text={"h3"} className="bg-gradient-to-r from-slate-500 to-slate-500 via-slate-400 text-transparent bg-clip-text w-fit">{period}</Typography>
      <Typography text={"h5"} className="opacity-80">{major}</Typography>
      <Link
        href={link}
        target="_blank"
        className="flex gap-3 items-center cursor-pointer h-fit my-3 md:my-0 md:h-[6rem]"
      >
        <Image
          src={logo}
          alt={title}
          width={50}
          height={50}
          draggable={false}
          className="w-[5rem] pointer-events-none select-none"
        ></Image>
        <Typography text={"h6"}>{title}</Typography>
      </Link>
      <Typography text={"body"} className="text-justify opacity-80">
        {description}
      </Typography>
    </div>
  );
};
