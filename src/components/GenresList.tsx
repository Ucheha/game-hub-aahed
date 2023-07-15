import React, { useState } from "react";
import useGenres from "../hooks/useGenres";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const GenresList = () => {
  const [isOpen, setOpen] = useState(true);
  const { genres, error, isLoading } = useGenres();
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            //rightIcon={<ChevronDownIcon />}
          >
            {isOpen ? "Close" : "Open"}
          </MenuButton>

          <MenuList>
            {genres.map((genre) => (
              <MenuItem key={genre.id} onClick={() => alert(genre.name)}>
                {genre.name}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default GenresList;
