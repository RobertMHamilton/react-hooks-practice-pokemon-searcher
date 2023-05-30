import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState , useEffect } from "react";

function PokemonPage() {

 const[pokemons , setPokemons]= useState([])
 const[searchQuery , setSearchQuery]=useState("")
 const handleOnChange = (e)=> setSearchQuery(e.target.value)
 
 useState(()=>{
   fetch("http://localhost:3001/pokemon")
   .then(resp => resp.json())
   .then((pokemons) => setPokemons(pokemons))
 },[])

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm setPokemons={setPokemons}/>
        <br />
        <Search handleOnChange={handleOnChange} />
        <br />
        <PokemonCollection pokemons={pokemons} searchQuery={searchQuery} />
      </Container>
    );
  }

export default PokemonPage;
