import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const {variable,color1,color2} = useParams()

    const num=isNaN(variable)
    

  return (
    <div style={{backgroundColor:color1}}>
    {num?  <h1 style={{color:color2}} >The word is : {variable}</h1> :  <h1 style={{color:color2}} >The number is : {variable}</h1> }
     
    </div>
  )
}

export default Number
