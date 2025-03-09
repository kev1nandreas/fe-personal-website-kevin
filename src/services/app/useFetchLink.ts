import { useQuery } from "@tanstack/react-query";
import { MAIN_ENDPOINT } from "../api/main/endpoint";
import { get } from "../api/main/call";

export const useFetchLink = (
  slug: string,
) => {
  return useQuery({
    queryFn: async () => {
      const { Kind, OK } = await get(
        MAIN_ENDPOINT.Links.Get.replace(":slug", slug)
      );
      if (!OK) {
        throw new Error(
          (Kind as { message: string }).message ||
            (Kind as { Message: string }).Message
        );
      }
      return Kind;
    },
    queryKey: ["fetch.link.by.slug", slug],
  });
};
