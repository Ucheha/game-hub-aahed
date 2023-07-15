import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const [isOpen, setOpen] = useState(true);
  const { genres, error, isLoading } = useGenres();
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<AiOutlineMenu />}
          />

          <MenuList>
            {genres.map((genre) => (
              <MenuItem
                key={genre.id}
                onClick={() => {
                  onSelectGenre(genre);
                  alert(genre.name);
                }}
              >
                <HStack>
                  <Image
                    boxSize="30px"
                    borderRadius={8}
                    src={genre.image_background}
                  />
                  <Text> {genre.name} </Text>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default GenresList;
