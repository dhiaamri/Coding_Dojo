import React from 'react'

const PersonCard = (props) => {
  return (
    <div>
    <h1>{props.firstName}, {props.lastName} </h1>
    <h2>age : {props.age}</h2>
    <h2>Hair Color : {props.hairColor}</h2>
    <button>Happy birthday</button>
    </div>
  )
}

export default PersonCard
