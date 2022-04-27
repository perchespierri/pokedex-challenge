import { ChangeEvent, EventHandler, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Card, PageButton} from '../';
import "./style.css";

const List = () => {
  const [inputField, setInputField] = useState<string>('');
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);

  const typedInput = inputField.toLowerCase();
  
  const pokemonFilter = 
    typedInput 
      ? pokemon.filter(({ name }) => name.includes(typedInput))
      : pokemon;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}/`)
      .then(response => response.json())
      .then(responseJSON => setPokemon(responseJSON.results));
    }, [page]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputField(event.target.value);
  }

  const handleClick = (commandString: string) => {
    if (commandString === "previous") return setPage(page-10);
    else return setPage(page+10);
  }

  return (
    <div>
      <input
      className="list-input"
        type="input"
        value={inputField}
        onChange={(event) => handleInput(event)}
      />

      {pokemonFilter && (  
        <ul>
          {pokemonFilter.map(({ name }) => (
            <Link to={`/pokemon/${name}`}>
              <Card key={name} name={name} />
            </Link>
            ))}
        </ul>
      )}
      <PageButton page={page} handleClick={handleClick}/>
    </div>
  );
};

export default List;
