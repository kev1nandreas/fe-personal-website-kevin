/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdMenu } from "react-icons/md";
import { menu } from "../lib/data";

export const Navbar = () => {
  const split = 4;
  const [openOthers, setOpenOthers] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [hash, setHash] = useState("/#home");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const homeElement = useRef<HTMLElement | null>(null);
  const aboutElement = useRef<HTMLElement | null>(null);
  const educationElement = useRef<HTMLElement | null>(null);
  const achievementsElement = useRef<HTMLElement | null>(null);
  const experiencesElement = useRef<HTMLElement | null>(null);
  const projectsElement = useRef<HTMLElement | null>(null);
  const contactElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    contactElement.current = document.getElementById("contact");
    projectsElement.current = document.getElementById("projects");
    experiencesElement.current = document.getElementById("experiences");
    achievementsElement.current = document.getElementById("achievements");
    educationElement.current = document.getElementById("education");
    aboutElement.current = document.getElementById("about");
    homeElement.current = document.getElementById("home");
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => {
          setOpenOthers(false);
          setOpenMenu(false);
        }, 200);
      }
    };

    if (openOthers || openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openOthers, openMenu]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY >= scroll) setShowNavbar(false);
      else setShowNavbar(true);

      homeElement.current && window.scrollY === 0 && setHash("/#home");
      aboutElement.current &&
        window.scrollY >= aboutElement.current.getBoundingClientRect().top &&
        setHash("/#about");
      educationElement.current &&
        window.scrollY >=
          educationElement.current.getBoundingClientRect().top + 300 &&
        setHash("/#education");
      achievementsElement.current &&
        window.scrollY >=
          achievementsElement.current.getBoundingClientRect().top + 1000 &&
        setHash("/#achievements");
      experiencesElement.current &&
        window.scrollY >=
          experiencesElement.current.getBoundingClientRect().top + 1800 &&
        setHash("/#experiences");
      projectsElement.current &&
        window.scrollY >=
          projectsElement.current.getBoundingClientRect().top + 2800 &&
        setHash("/#projects");
      contactElement.current &&
        window.scrollY >=
          contactElement.current.getBoundingClientRect().top + 4000 &&
        setHash("/#contact");

      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (navbarRef.current && !openOthers) {
      navbarRef.current.addEventListener("mouseenter", () => {
        setShowNavbar(true);
      });
    }
  }, [openOthers]);

  return (
    <div
      ref={navbarRef}
      className="flex fixed z-50 top-0 right-0 left-0 justify-end md:justify-center items-center p-3 pt-6 select-none"
    >
      {/* Desktop view menu */}
      <div
        className={`hidden md:flex relative justify-center items-center gap-6 border-2 border-gray-500 px-10 w-fit rounded-full transition-all duration-800 ${
          showNavbar
            ? "opacity-100 max-w-[50rem]"
            : "opacity-0 max-w-0 overflow-hidden"
        }`}
        style={{
          background: "rgba(23, 23, 23, 0.80)",
          backdropFilter: "blur(8px)",
        }}
      >
        {menu.slice(0, split).map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`hover:opacity-70 cursor-pointer p-3 transition-all duration-200 hover:underline underline-offset-6 ${
              hash === item.link ? "opacity-100 text-yellow-500" : "opacity-70"
            }`}
          >
            {item.name}
          </Link>
        ))}
        |
        <button
          className={`hover:opacity-100 transition-all duration-200 cursor-pointer p-3 ${
            openOthers ? "opacity-100" : "opacity-70"
          }`}
          onClick={() => setOpenOthers(!openOthers)}
        >
          Others
        </button>
        {openOthers && (
          <div
            className="absolute flex flex-col gap-1 top-14 -right-11 p-4 w-fit border-2 border-gray-500 rounded-lg backdrop-blur-2xl"
            style={{
              background: "rgba(23, 23, 23)",
            }}
            data-aos="fade"
            ref={dropdownRef}
          >
            {menu.slice(split).map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={() => setOpenOthers(false)}
                className={`cursor-pointer p-3 px-5 rounded-lg hover:bg-gray-800 flex gap-5 items-center transition-all duration-200 ${
                  hash === item.link ? "border-l-2" : ""
                }`}
              >
                {item.icon && <item.icon className="text-2xl" />}
                <div>
                  <p>{item.name}</p>
                  <p className="text-xs">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile view menu */}
      <div
        className={`flex md:hidden relative justify-center items-center gap-6 border-2 border-gray-500 w-fit rounded-full bg-[#171717] transition-all duration-800 ${
          showNavbar
            ? "opacity-100 max-w-[50rem]"
            : "opacity-0 max-w-0 overflow-hidden"
        }`}
        ref={dropdownRef}
      >
        <button
          className={`hover:opacity-100 transition-all duration-200 cursor-pointer p-3 px-5 flex gap-1 ${
            openMenu ? "opacity-100" : "opacity-70"
          }`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <MdMenu className="text-2xl" />
          Menu
        </button>
        {openMenu && (
          <div
            className="absolute flex flex-col gap-1 top-14 right-0 p-4 w-[17rem] border-2 border-gray-500 rounded-lg"
            style={{
              background: "rgba(23, 23, 23, 0.80)",
              backdropFilter: "blur(8px)",
            }}
            data-aos="fade"
          >
            {menu.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={() => setOpenMenu(false)}
                className="cursor-pointer p-3 px-5 rounded-lg hover:bg-gray-800 flex gap-5 items-center transition-all duration-200"
              >
                {item.icon && <item.icon className="text-2xl" />}
                <div>
                  <p>{item.name}</p>
                  <p className="text-xs">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
