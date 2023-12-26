import React,{useState} from 'react'

const Display = () => {
    const [pokemon,setPokemon] = useState([])


    
    const fetchApi=()=>{

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response =>{return response.json()}).then(response=>(setPokemon(response.results)))
    .catch(err => {
        console.log(err);
    })

    }


  return (
    <div>

<button onClick={fetchApi}>Fetch</button>
<div>
    {pokemon.map((v, idx)=>{
       return <h3 key={idx}>name : {v.name}</h3> })}
</div>
      
    </div>
  )
}

export default Display
