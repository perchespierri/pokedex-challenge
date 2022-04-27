import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { capitalizeString } from '../../global/functions';
import "./style.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<any>("");
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(responseJSON => {
        setPokemon(responseJSON);
      });
  }, [name, pokemon]);

  if (!pokemon) return <h1>LOADING</h1>

  return (
    <div>
      <div className="pokemon-container">
        <h1 className="pokemon-name">
          {pokemon.name.toUpperCase()}
        </h1>
      </div>

      <div className="pokemon-container">
        <img
          src={pokemon.sprites.front_default} 
          alt={pokemon.name} 
        />
      </div>  
      
      <div className="lists-container">
        <h2>Abilities</h2>
        <ul>
          {pokemon.abilities.map((item: any) => (
            <li key={item.ability.name}>
              {capitalizeString(item.ability.name)}
            </li>
          ))}
        </ul>
        
        <h2>Physical info</h2>
        <ul>
          <li key="height">
            Height: {pokemon.height}
          </li>
          <li key="weight">
            Weight: {pokemon.weight}
          </li>
        </ul>
        
        <h2>Types</h2>
        <ul>
          {pokemon.types.map((item: any) => (
              <li key={item.type.name}>
                {capitalizeString(item.type.name)}
              </li>
            ))}
        </ul>
        
        <h2>Moves list</h2>
        <ul>
          {pokemon.moves.map((item: any) => (
            <li key={item.move.name}>
              {capitalizeString(item.move.name)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokemon;
