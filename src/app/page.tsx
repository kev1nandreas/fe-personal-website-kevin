import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <p className="text-2xl font-semibold text-center">
        New Things Is{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-500 via-yellow-300 text-transparent bg-clip-text">
          Coming Up
        </span>{" "}
        Soon
      </p>
      <p>The new landing page is being developed.</p>

      <div className="mt-3 flex gap-4">
        <Link href={"https://linkedin.com/in/kevinandreas"} target="_blank">
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link href={"https://github.com/kev1nandreas"} target="_blank">
          <FaGithub className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}
