import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(error => console.log(error));
  }, [id]); 

  const handleEdit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/${id}/edit`, product)
      .then(res => {
        navigate('/');
        setProduct({ title: '', price: 0, description: '' });
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleEdit}>
        <label>Title :</label>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          value={product.title || ''}
        />
        <label>Price :</label>
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          value={product.price || 0}
        />
        <label>Description :</label>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          value={product.description || ''}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Edit