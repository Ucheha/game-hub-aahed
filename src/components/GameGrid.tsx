import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameQueryParam } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQueryParam;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);

  const totalFetchedGames = data?.pages.reduce(
    (acc, page) => acc + page.results.length,
    0
  );

  return (
    <>
      {error && <Text>{error.message}</Text>}
      {isLoading && (
        <Spinner
          justifySelf="center"
          justifyContent="center"
          boxSize={100}
          marginY="45%"
        />
      )}
      <InfiniteScroll
        dataLength={totalFetchedGames || 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage || true}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={10}
          justifyContent="space-between"
          padding="5px"
        >
          {data?.pages?.map((response, index) => (
            <React.Fragment key={index}>
              {response.results?.map((data) => (
                <GameCard key={data.id} game={data} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
