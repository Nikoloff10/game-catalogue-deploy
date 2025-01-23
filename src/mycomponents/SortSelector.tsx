import { Stack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger marginLeft="4vh" marginBottom="2vh">
        <IconButton size="sm" padding="15px" variant="subtle">
          Order by: Relevance
          <BsChevronDown />
        </IconButton>
      </MenuTrigger>
      <MenuContent borderRadius={10} position="absolute" marginLeft='33vh' marginTop="25vh">
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="asc">Ascending</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
