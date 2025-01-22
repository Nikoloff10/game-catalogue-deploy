import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./mycomponents/NavBar";
import GameGrid from "./mycomponents/GameGrid";
import GenreList from "./mycomponents/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ lg: "200px 1fr", base: "1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }} paddingX={5}>
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
