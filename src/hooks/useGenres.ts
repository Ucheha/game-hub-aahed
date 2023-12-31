//import useData from "./useData";

import ms from "ms";
import { FetchResponse } from "../services/api-client";
import { CACHE_NAME_GENRES } from "../services/constants";
import genresService, { Genre } from "../services/genres-client";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
  const { data, error, isLoading } = useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_NAME_GENRES,
    queryFn: genresService.getAll,
    staleTime: ms("24h"), // 24 hours
  });

  return { genres: data?.results, error, isLoading };
};

export default useGenres;
