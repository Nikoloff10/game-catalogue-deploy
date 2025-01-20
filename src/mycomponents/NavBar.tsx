import { HStack, Image } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";

const NavBar = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeButton
        size="lg"
        colorPalette={colorMode === "light" ? "orange" : "blue"}
      />
    </HStack>
  );
};

export default NavBar;
