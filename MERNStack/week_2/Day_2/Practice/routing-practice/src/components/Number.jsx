import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const {variable,color} = useParams()
    console.log(color);

    const num=isNaN(variable)
    

  return (
    <div style={{backgroundColor:color}}>
    {num?  <h1>The word is : {variable}</h1> :  <h1>The number is : {variable}</h1> }
     
    </div>
  )
}

export default Number
