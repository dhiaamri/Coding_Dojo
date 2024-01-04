import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const People = () => {
  const [person, setPerson] = useState({});
  const [planet, setPlanet] = useState({});
  const [homeWorld, setHomeWorld] = useState("");
  const navigate = useNavigate()
  
  const { choice, id } = useParams();
  console.log(choice, id);

  const handleLink=()=>{
    
    const myLink=JSON.stringify(person.homeworld);
    // const id=myLink.substring(31,32)
    const arr=myLink.split("/")
    console.log(arr);

    navigate(`/${arr[5]}`)
  
    

  }

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/${choice}/${id}`)
      .then((res) => {
        choice == "people" ? setPerson(res.data) : setPlanet(res.data);
      })
      .catch((err) => navigate("/error"));

    
  }, [id]);
  

  if (choice == "people") {
    if(choice=="people"){
        axios.get(person.homeworld).then((res) =>setHomeWorld(res.data.name))
        .catch((err) => console.log(err));
    }
    
    return (
      <div>
        <h1>name : {person.name}</h1>
        <h1>height : {person.height}</h1>
        <h1>mass : {person.mass}</h1>
        <h1>hair_color : {person.hair_color}</h1>
        <h1>Home world : <a onClick={handleLink}>{homeWorld}</a></h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>name : {planet.name}</h1>
        <h1>population : {planet.population}</h1>
        <h1>terrain : {planet.terrain}</h1>
        <h1>orbital period : {planet.orbital_period}</h1>
      </div>
    );
  }
};

export default People;
