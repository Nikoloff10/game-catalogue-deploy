import { IconButton } from "@chakra-ui/react/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";

import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <MenuRoot>
      <MenuTrigger marginLeft="4vh" marginBottom="2vh">
        <IconButton size="sm" padding="15px" variant="subtle">
          Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </IconButton>
      </MenuTrigger>
      <MenuContent
        borderRadius={10}
        position="absolute"
        marginLeft="33vh"
        marginTop="5vh"
      >
        {sortOrders.map((order) => (
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
