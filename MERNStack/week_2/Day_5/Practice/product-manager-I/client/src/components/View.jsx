import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const View = () => {

    const [products,setProducts] = useState([])
    useEffect(()=>{

        axios.get(`http://localhost:8000/api/products`).then(res=>{setProducts(res.data.allProducts)}).catch(error=>console.log(error));
    },[])




  return (
    <div>
        {products.map((v, idx)=><Link key={idx} to={`/api/products/${v._id}`} ><h3 key={idx}>{v.title}</h3></Link>)}
        
      
    </div>
  )
}

export default View
