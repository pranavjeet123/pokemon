import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const SecondPage = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/1/`;
  const [pokemonInfo, setPokemonInfo] = useState({ name: "", sprites: {} });
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setPokemonInfo(res))
      .catch(e => {
        console.log(e);
      });
  }, [url]);

  return (
    <div>
      <h1>{pokemonInfo.name}</h1>

      <div className="card">
        <img
          className="pokemonImage"
          src={pokemonInfo.sprites.front_default}
          alt="pokemon"
        />
      </div>
    </div>
  );
};
