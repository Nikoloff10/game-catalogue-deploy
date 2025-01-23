import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import {
  MenuRoot,
  MenuTrigger,
  IconButton,
  MenuContent,
  MenuItem,
  HStack,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }
  return (
    <MenuRoot>
      <MenuTrigger marginBottom="2vh">
        <IconButton size="sm" padding="15px" variant="subtle">
          {selectedPlatform?.name || "All Platforms"}
          <BsChevronDown />
        </IconButton>
      </MenuTrigger>
      <MenuContent borderRadius={10} position="absolute" marginLeft="8vh" marginTop = "5vh">
        {data.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} value={platform.id.toString()}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
