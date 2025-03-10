/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useFetchLink } from "@/services/app/useFetchLink";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { TbMoodEmpty } from "react-icons/tb";

export default function Page() {
  const { slug } = useParams();
  const { data, isLoading, error } = useFetchLink(slug as string);
  const link = (data as any)?.data?.destination;

  const router = useRouter();

  useEffect(() => {
    if (link) {
      router.push(link);
    }
  });

  return (
    <div className="flex items-center justify-center h-screen text-3xl md:text-5xl font-semibold">
      {isLoading && !error && <p className="animate-[pulse_1.5s_ease-in-out_infinite]">Loading...</p>}
      {link && <p className="animate-[pulse_1.5s_ease-in-out_infinite]">Redirecting...</p>}
      {error && (
        <div className="flex items-center flex-col">
          <TbMoodEmpty className="w-20 h-20 my-3" />
          <p>The link is invalid.</p>
          <p className="text-sm font-light py-3">Please check your link and try again.</p>
        </div>
      )}
    </div>
  );
}
