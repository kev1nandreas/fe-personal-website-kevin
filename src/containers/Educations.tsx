import { CardEducation } from "@/components/Card/CardEducation";
import { Typography } from "@/components/Typography";
import { education } from "@/lib/data";

export const Educations = () => {
  return (
    <div
      id="education"
      className="gap-10 flex flex-col items-center justify-center mt-40"
    >
      <Typography text={"h1"} className="text-center md:text-left">
        Educations
      </Typography>
      <div className="flex gap-5 md:flex-row flex-col mt-[3rem]">
        {education.map((item, index) => (
          <CardEducation
            key={index}
            title={item.title}
            major={item.major}
            logo={item.logo}
            description={item.description}
            period={item.period}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
