import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../services/platforms-client";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { platforms } = usePlatform();
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            marginBottom={10}
            marginTop={10}
            isActive={isOpen}
            as={Button}
            minWidth="100px"
            rightIcon={<BsChevronDown />}
          >
            {(selectedPlatform && selectedPlatform.name) || "Platforms"}
          </MenuButton>

          <MenuList>
            {platforms?.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => {
                  onSelectPlatform(platform);
                }}
                backgroundColor={
                  selectedPlatform?.id === platform.id ? "gray" : "none"
                }
              >
                <HStack>
                  <Text> {platform.name} </Text>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default PlatformSelector;
