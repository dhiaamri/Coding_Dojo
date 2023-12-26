import React,{useState} from "react";
import axios from "axios";


const Form = () => {

const [pokemon,setPokemon] = useState([])

const axiosApi = () => {
    if (pokemon.length==0){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        console.log(response);
        setPokemon(response.data.results)
        
      })
      .catch((error) => console.log(error));}
      else{
        setPokemon([])
      }
  };

  return (
    <div>
      <button onClick={axiosApi}>Fetch</button>
      <div>
        {pokemon.map((v, idx)=><h1 key={idx}>{v.name}</h1>)}
      </div>
    </div>
  );
};

export default Form;
