import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "../hooks/useGenres";
import { GameQueryParam } from "../App";

interface Props {
  gameQuery: GameQueryParam;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGames(gameQuery);
  return (
    <>
      {error && <Text>{error}</Text>}
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
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
