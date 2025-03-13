import { Typography } from "../Typography";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardExperienceProps {
  date: string;
  title: string;
  company: string;
  description: string[];
}

export const CardExperience = ({
  date,
  title,
  company,
  description,
}: CardExperienceProps) => {
  AOS.init({
    duration: 1000,
  });

  return (
    <div data-aos={"fade-up"} className="flex flex-col lg:flex-row gap-2">
      <Typography text={"h7"} className="opacity-50 w-[20rem]">
        {date}
      </Typography>
      <div className="lg:w-[40rem]">
        <Typography text={"h5"}>{title}</Typography>
        <Typography text={"body"}>{company}</Typography>
        <Typography text={"body"} className="opacity-80 mt-3 ml-4">
          <ul className="text-justify">
            {description.map((desc, index) => (
              <li key={index} className="list-disc">
                {desc}
              </li>
            ))}
          </ul>
        </Typography>
      </div>
    </div>
  );
};
