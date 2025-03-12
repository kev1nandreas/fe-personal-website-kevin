import { AiOutlineProject } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaSchool } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuTrophy } from "react-icons/lu";
import { TiContacts } from "react-icons/ti";

export const menu = [
  {
    name: "Home",
    link: "/",
    description: "Welcome to my portfolio",
    icon: GoHome,
  },
  {
    name: "About",
    link: "/#about",
    description: "Get to know about me",
    icon: CgProfile,
  },
  {
    name: "Education",
    link: "/#education",
    description: "My educational background",
    icon: FaSchool,
  },
  {
    name: "Achievemets",
    link: "/#achievements",
    description: "What I have achieved",
    icon: LuTrophy,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    description: "My work experiences",
    icon: BsPersonWorkspace,
  },
  {
    name: "Projects",
    link: "/#projects",
    description: "What I have built and done",
    icon: AiOutlineProject,
  },
  {
    name: "Contact",
    link: "/#contact",
    description: "How to reach me out",
    icon: TiContacts,
  },
];

export const education = [
  {
    major: "Natural Science",
    title: "Darma Yudha Senior High School",
    logo: "/darmayudhalogo.png",
    description:
      "Darma Yudha Senior High School is one of the top schools in Riau, known for winning many awards in science and art. I'm in the Mathematics and Natural Science program. I'm part of the Geoscience Club and have won several competitions in geoscience. Being at Darma Yudha has been a great experience, and I'm proud to be part of a school that values excellence.",
    period: "2020 - 2023",
    link: "https://darmayudha.sch.id",
  },
  {
    major: "Informatics Engineering",
    title: "Sepuluh Nopember Institute of Technology",
    logo: "/itslogo.png",
    description:
      "Sepuluh Nopember Institute of Technology stands out as a top institute in Indonesia for science and technology. I'm honored to be part of the informatics undergraduate program. Actively engaging in academics, various committees, and organizations, I continually develop my skills in a vibrant learning environment. Excited to contribute and thrive in this esteemed institution's rich academic and technological community.",
    period: "2023 - Now",
    link: "https://its.ac.id",
  },
];

export const achievements = [
  {
    name: "Excellent for International Earth Science Olympiad Art in Earth Science 2023",
    issuer: "by International Geoscience Education Organization (IGEO)",
    description: "Received an excellent predicate (equal to gold medals) in the Art in Earth Science, one of the subtests in the International Earth Science Olympiad, where each participant will present their creative talents through the works of art, specifically art that is in some way connected to Earth Science.",
    date: "August 2023",
  },
  {
    name: "Good for Data Mining Test International Earth Science Olympiad 2023",
    issuer: "by International Geoscience Education Organization (IGEO)",
    description: "I received a good predicate (equal to honorable mention) in the Data Mining Test, one of the subtests in the International Earth Science Olympiad, followed by 20+ countries and more than 100+ students worldwide.",
    date: "August 2023",
  },
  {
    name: "Bronze Medal in Earth Science, Indonesia National Science Competition",
    issuer: "by Indonesian Ministry of Education, Culture, Research, and Technology",
    description: "Won the bronze medals (top 30 students) of over twenty thousand students across Indonesia in the National Science Olympiad, a science competition for Indonesian students held by the Indonesian Ministry of Education and Culture.",
    date: "October 2022",
  }
]
