import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genres-client";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: number) => void;
  selectedGenre: number | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  //const [isOpen, setOpen] = useState(true);
  const { genres, error, isLoading } = useGenres();
  return (
    <List padding={10} style={{ cursor: "pointer" }}>
      {genres?.map((genre) => (
        <ListItem
          padding={2}
          key={genre.id}
          onClick={() => {
            onSelectGenre(genre.id);
          }}
          backgroundColor={selectedGenre === genre.id ? "gray" : "none"}
        >
          <HStack>
            <Image
              boxSize="30px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Text> {genre.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
