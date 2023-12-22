import React,{ useState } from 'react'

const PersonCard = (props) => {


  const [count, setCount] = useState(props.age)


  const countHandler = () =>{
    setCount(count+1)
  }

  return (
    <div>
    <h1>{props.firstName}, {props.lastName} </h1>
    <h2>{count}</h2>
    <h2>Hair Color : {props.hairColor}</h2>
    <button onClick={ countHandler }>Happy birthday</button>
    </div>
  )
}

export default PersonCard
