import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import { Container } from "./styled";

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  /* const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"; */
  return (
    <Container>
      <div>
        <img alt="pokeapi-logo" src={"./titulo_pokemon.jpeg"} className="navbar-img" style={{ width: '50vw' }}/>
      </div>
      <div>❤️ / {favoritePokemons.length}</div>
    </Container>
  );
}
