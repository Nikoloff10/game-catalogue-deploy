import { HStack, Image } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeButton
      whiteSpace={"nowrap"}
        size="sm"
        colorPalette={colorMode === "light" ? "orange" : "blue"}
      />
    </HStack>
  );
};

export default NavBar;
