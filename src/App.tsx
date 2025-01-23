import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import NavBar from "./mycomponents/NavBar";
import GameGrid from "./mycomponents/GameGrid";
import GenreList from "./mycomponents/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./mycomponents/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./mycomponents/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>

      <GridItem area="main">
        <HStack marginBottom="3vh">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector sortOrder={gameQuery.sortOrder}  onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
