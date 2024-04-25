import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return null;

  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '350px', margin: '0 auto', border: '1px solid lightgray', padding: '40px', borderRadius: '10px' }}>
        <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px' }} />
        <Typography variant="subtitle1" style={{fontWeight:'700', color:'green', textAlign: 'center'}}>{product.title}</Typography>
        <Typography variant="body2" style={{fontWeight:'700', color:'red', textAlign: 'center'}}>{product.price} $</Typography>
        <Typography variant="body2" style={{ textAlign: 'center' }}>{product.description}</Typography>
      </div>
    </Layout>
  );
};

export default ProductPage;