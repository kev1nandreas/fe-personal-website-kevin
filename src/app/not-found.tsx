'use client';

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-3xl md:text-5xl font-semibold gap-4">
      <p>404 | Page Not Found</p>
      <p className="text-sm font-medium">
        It seems like you&apos;re lost. Please check your link and try again.
      </p>
      <button
        className="text-sm font-bold text-blue-500 cursor-pointer border-2 p-2 px-4 rounded-lg select-none hover:bg-blue-500 hover:text-white hover:border-transparent mt-2 transition-all duration-200"
        onClick={() => router.back()}
      >
        <FaArrowLeft className="inline-block w-4 h-4 mr-2" />
        Previous Page
      </button>
    </div>
  );
}
