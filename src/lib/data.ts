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