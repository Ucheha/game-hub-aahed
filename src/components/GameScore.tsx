import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const GameScore = ({ metacritic }: Props) => {
  let color = "red";
  if (metacritic > 60) color = "orange";
  if (metacritic > 80) color = "green";

  return (
    <Badge fontSize={20} colorScheme={color} borderRadius={10}>
      {metacritic}
    </Badge>
  );
};

export default GameScore;
