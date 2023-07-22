import platformsClient, { Platform } from "../services/platforms-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import { CACHE_NAME_PLATFORMS } from "../services/constants";

const usePlatform = () => {
  const { data, error, isLoading } = useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_NAME_PLATFORMS,
    queryFn: platformsClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

  return { platforms: data?.results, error, isLoading };
};

export default usePlatform;
