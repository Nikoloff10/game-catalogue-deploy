import { Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./mycomponents/NavBar";
import GameGrid from "./mycomponents/GameGrid";
import GenreList from "./mycomponents/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./mycomponents/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);


  return (
    <Grid
      
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ lg: "200px 1fr", base: "1fr" }}
      templateRows={{ base: "auto 1fr", lg: "auto 1fr" }}
      height="100vh"
      gap={4}
      
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>

      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
