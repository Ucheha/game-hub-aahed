import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQueryParam } from "../App";
import { FetchResponse } from "../services/api-client";
import gamesClient, { Game } from "../services/games-client";
import { CACHE_NAME_GAMES } from "../services/constants";

const useGames = (gameQuery: GameQueryParam) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_NAME_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gamesClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          // page_size: gameQuery.page_size,
          page: pageParam,
        },
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      console.log(`last page : ${lastPage} , allPages:`);
      console.log(allPages);
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
