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

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }
  return (
    <MenuRoot>
      <MenuTrigger marginLeft="4vh" marginBottom="2vh">
        <IconButton size="sm" padding="15px" variant="subtle">
          Platforms
          <BsChevronDown />
        </IconButton>
      </MenuTrigger>
      <MenuContent borderRadius={10} position="absolute">
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.id.toString()}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
