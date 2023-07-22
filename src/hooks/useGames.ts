import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQueryParam } from "../App";
import { FetchResponse } from "../services/api-client";
import gamesClient, { Game } from "../services/games-client";
import { CACHE_NAME_GAMES } from "../services/constants";
import ms from "ms";

const useGames = (gameQuery: GameQueryParam) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_NAME_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gamesClient.getAll({
        params: {
          genres: gameQuery.genre,
          parent_platforms: gameQuery.platform?.id,
          // page_size: gameQuery.page_size,
          page: pageParam,
        },
      }),
    keepPreviousData: true,
    staleTime: ms("24h"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
