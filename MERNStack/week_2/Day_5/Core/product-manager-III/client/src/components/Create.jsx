import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import View from './View'

const Create = (props) => {

  const [product,setProduct]=useState({title:"",price:0,description:""})

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

    axios.post(`http://localhost:8000/api/products/new`,product).then(res=>{navigate('/');setProduct({title:"",price:0,description:""})}).catch(error=>console.log(error))
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label >Title : </label>
        <input type="text" onChange={(e)=>setProduct({...product,title:e.target.value})} value={product.title}/>
        <label >Price : </label>
        <input type="number" onChange={(e)=>setProduct({...product,price:e.target.value})} value={product.price}/>
        <label >Description : </label>
        <input type="text" onChange={(e)=>setProduct({...product,description:e.target.value})} value={product.description}/>
        <button>Submit</button>
      </form>
      <View/>
      
    </div>
  )
}

export default Create
