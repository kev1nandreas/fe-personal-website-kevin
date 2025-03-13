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
    link: "/#home",
    description: "Back to the home page",
    icon: GoHome,
  },
  {
    name: "About",
    link: "/#about",
    description: "Get to know about me",
    icon: CgProfile,
  },
  {
    name: "Educations",
    link: "/#education",
    description: "My educational background",
    icon: FaSchool,
  },
  {
    name: "Achievements",
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
    period: "2023 - Present",
    link: "https://its.ac.id",
  },
];

export const achievements = [
  {
    name: "Awardee of Unggulan Scholarship 2024",
    issuer:
      "by Indonesian Ministry of Education, Culture, Research, and Technology",
    description:
      "The Unggulan Scholarship, managed by the Ministry of Education, Culture, Research, and Technology of Indonesia, is awarded to high-achieving individuals across the nation for Bachelor's, Master's, and Doctoral degree programs.",
    date: "July 2024",
  },
  {
    name: "Participant of KMI (Kewirausahaan Mahasiswa Indonesia) Expo 2024",
    issuer:
      "by Indonesian Ministry of Education, Culture, Research, and Technology",
    description:
      "KMI Expo (Kewirausahaan Mahasiswa Indonesia Expo) is a national entrepreneurship event where students from across Indonesia showcase their innovative business ideas. Our team was selected as a finalist, giving us the opportunity to compete, present our project, and gain valuable insights to grow as young entrepreneurs. ",
    date: "October 2024",
  },
  {
    name: "Good for Data Mining Test International Earth Science Olympiad 2023",
    issuer: "by International Geoscience Education Organization (IGEO)",
    description:
      "I received a good predicate (equal to honorable mention) in the Data Mining Test, one of the subtests in the International Earth Science Olympiad, followed by 20+ countries and more than 100+ students worldwide.",
    date: "August 2023",
  },
  {
    name: "Bronze Medal in Earth Science, Indonesia National Science Competition",
    issuer:
      "by Indonesian Ministry of Education, Culture, Research, and Technology",
    description:
      "Won the bronze medals (top 30 students) of over twenty thousand students across Indonesia in the National Science Olympiad, a science competition for Indonesian students held by the Indonesian Ministry of Education and Culture.",
    date: "October 2022",
  },
];

export const experiences = [
  {
    date: "July 2024 - Present",
    title: "Frontend Developer",
    company: "Flexoo Software House Informatics ITS - Surabaya",
    description: [
      "Developed responsive and user-friendly interfaces to enhance user experience.",
      "Collaborated with backend teams to integrate APIs and ensure seamless functionality.",
      "Utilized Next.js and Tailwind CSS to create efficient, modern web applications.",
    ],
  },
  {
    date: "January 2024 - Present",
    title: "Head of Organizing Subdivision",
    company: "Schematics NPC 2025 - Surabaya",
    description: [
      "Planned and managed team itineraries, schedules, and administrative tasks to ensure operational efficiency.",
      "Contribute to the preparation and logistical arrangements for the team's participation in KRTI 2024 in Yogyakarta.",
      "Developed adaptability and problem-solving skills by handling dynamic administrative and organizational challenges.",
    ],
  },
  {
    date: "March 2024 - Present",
    title: "Staff of Administration Division",
    company: "Bayucaraka UAV Research Team - Surabaya",
    description: [
      "Planned and managed team itineraries, schedules, and administrative tasks to ensure operational efficiency.",
      "Contribute to the preparation and logistical arrangements for the team's participation in KRTI 2024 in Yogyakarta.",
      "Developed adaptability and problem-solving skills by handling dynamic administrative and organizational challenges.",
    ],
  },
  {
    date: "September - Desember 2023",
    title: "Staff of Grand Event Division",
    company: "Maba Cup 2023 - Surabaya",
    description: [
      "Designed and planned opening and closing ceremonies for a seamless experience.",
      "Managed logistics to ensure smooth event execution.",
      "Created a memorable atmosphere for all participants and attendees.",
    ],
  },
];

export const projects = [
  {
    title: "Personal Landing Page",
    description:
      "This is a personal landing page I built using Next.js and Tailwind CSS to showcase my profiile and portfolio. It features highly reusable components, is responsive on all devices, and includes interactive elements for a better user experience. This is also my first fully self-designed website, created from scratch with inspiration from various references.",
    techStack: ["next", "tailwind"],
    image: "/projects/landingpage.png",
    link: "https://kevin-andreas.com/",
    github: "https://github.com/kev1nandreas/fe-personal-website-kevin",
    finished: true,
  },
  {
    title: "Link Shortener",
    description:
      "Managing long URLs can be inconvenient, making sharing and accessibility more challenging. This web application offers a simple and efficient solution by shortening links for easier use. As my first full-stack project, developed with Laravel and Next.js, it demonstrates my ability to build a seamless and user-friendly experience. The shortened links are redirected using my main domain, kevin-andreas.com, ensuring a professional and reliable service.",
    techStack: ["next", "laravel", "tailwind"],
    image: "/projects/linkshortener.png",
    link: "https://short.kevin-andreas.com/",
    finished: false,
  },
  {
    title: "BEM FTK Website",
    description:
      "My team and I developed the official website for BEM FTK to provide a seamless platform for information and engagement. As the Front-End Developer, I focused on ensuring a well-designed, user-friendly interface while maintaining smooth integration with the backend. Built with Next.js, the website delivers high performance, responsiveness, and an optimized user experience.",
    techStack: ["next", "tailwind"],
    image: "/projects/bemftk.png",
    link: "https://bemftk.com/",
    finished: true,
  }
]

export const contacts = [
  {
    name: "Email",
    value: "mailto:kevin.andreascn@gmail.com"
  },
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/kevinandreas/"
  },
  {
    name: "GitHub",
    value: "https://github.com/kev1nandreas"
  },
  {
    name: "Instagram",
    value: "https://www.instagram.com/kev1nandreas/"
  },
]
