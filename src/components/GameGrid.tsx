import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameQueryParam } from "../App";
import React, { useEffect } from "react";

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

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isLoading]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchNextPage();
  };

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
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} my={5} p={10}>
          {isFetchingNextPage ? "Loading ..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
