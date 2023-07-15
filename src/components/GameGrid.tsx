import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameScore from "./GameScore";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre);
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
