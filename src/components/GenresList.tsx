import React, { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  //const [isOpen, setOpen] = useState(true);
  const { genres, error, isLoading } = useGenres();
  return (
    <List padding={10} style={{ cursor: "pointer" }}>
      {genres.map((genre) => (
        <ListItem
          padding={2}
          key={genre.id}
          onClick={() => {
            onSelectGenre(genre);
          }}
          backgroundColor={selectedGenre?.id === genre.id ? "gray" : "none"}
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

  // <Menu>
  //   {({ isOpen }) => (
  //     <>
  //       <MenuButton
  //         isActive={isOpen}
  //         as={Button}
  //         rightIcon={<BsChevronDown />}
  //       />

  //       <MenuList>
  //         {genres.map((genre) => (
  //           <MenuItem
  //             key={genre.id}
  //             onClick={() => {
  //               onSelectGenre(genre);
  //               alert(genre.name);
  //             }}
  //             backgroundColor={
  //               selectedGenre?.id === genre.id ? "gray.100" : "none"
  //             }
  //           >
  //             <HStack>
  //               <Image
  //                 boxSize="30px"
  //                 borderRadius={8}
  //                 src={genre.image_background}
  //               />
  //               <Text> {genre.name} </Text>
  //             </HStack>
  //           </MenuItem>
  //         ))}
  //       </MenuList>
  //     </>
  //   )}
  // </Menu>
};

export default GenresList;
