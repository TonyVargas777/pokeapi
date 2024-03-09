import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import { Container } from "./styled";

export default function Pokemon(props) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "💙";
  return (
    <Container>
      <div className="card-top">
        <div className="image-pokemon">
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </div>

        <h3> {pokemon.name}</h3>
        <div>N: {pokemon.id}</div>
        <div className="image-pokemon">
          <img alt={pokemon.name} src={pokemon.sprites.back_default} />
        </div>
      </div>

      <div className="card-bottom">
        {pokemon.types.map((type, index) => {
          return (
            <div key={index} className="pokemon-type-text">
              {"Tipo: "}
              {type.type.name}
            </div>
          );
        })}
        {pokemon.abilities.map((type, index) => {
          return (
            <div key={index} className="pokemon-type-text">
              {"Habilidades: "}
              {type.ability.name}
            </div>
          );
        })}
        {pokemon.past_types.map((type, index) => {
          return (
            <div key={index} className="pokemon-type-text">
              {"Generación: "}
              {type.generation.name}
            </div>
          );
        })}
        <button onClick={onHeartClick}> Favoritos {heart}</button>
      </div>
    </Container>
  );
}
