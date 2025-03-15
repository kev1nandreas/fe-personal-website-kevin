import { Typography } from "@/components/Typography";
import { contacts, menu } from "@/lib/data";
import Link from "next/link";

export const Footer = () => {
  return (
    <div
      id="contact"
      className="flex md:flex-row flex-col mt-30 justify-center md:items-start items-center gap-10 md:gap-15 py-20"
      style={{ borderTop: "2px solid rgba(240, 240, 240, 0.5)" }}
    >
      <div className="w-fit md:mr-10 md:text-left text-center">
        <Typography text={"h5"}>Kevin Andreas</Typography>
        <Typography text={"body"} className="opacity-80 text-xs">
          © 2025 Kevin Andreas. All rights reserved.
        </Typography>
      </div>

      {/* Menu and Contacts */}
      <div className="flex gap-20">
        <div className="w-fit flex flex-col gap-1">
          <Typography className="mb-2">This Website</Typography>
          {menu.slice(0, -1).map((item, index) => (
            <Link href={item.link} key={index}>
              <Typography
                text={"body"}
                className="text-sm opacity-70 hover:opacity-100"
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </div>
        <div className="w-fit flex flex-col gap-1">
          <Typography className="mb-2">Contacts</Typography>
          {contacts.map((item, index) => (
            <Link href={item.value} key={index} target="_blank">
              <Typography
                text={"body"}
                className="text-sm opacity-70 hover:opacity-100"
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
