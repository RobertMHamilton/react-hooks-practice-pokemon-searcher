import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons , searchQuery}) {
  
  const searchResults = pokemons.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <Card.Group itemsPerRow={6}>
    {searchResults.map(pokemon=> <PokemonCard key ={pokemon.id}{...pokemon}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
