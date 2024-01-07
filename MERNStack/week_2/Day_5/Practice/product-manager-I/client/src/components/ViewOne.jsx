import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'


const ViewOne = () => {
  const navigate=useNavigate()
  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/${id}/delete`).then(res=>navigate("/"))

  }
    const [product,setProduct]= useState({})
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`).then(res=>setProduct(res.data))

    },[])


  return (
    <div>
        <h1>{product.title}</h1>
        <h3>Price : {product.price}</h3>
        <h5>Description : {product.description}</h5>
        <Link to={`/${product._id}/edit`}>Edit</Link>
<button onClick={handleDelete}>Delete</button>
      
    </div>
  )
}

export default ViewOne
