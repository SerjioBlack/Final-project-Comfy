import React, { useState, useEffect } from 'react';
import ProductLayout from '../../Layout/ProductLayout';
import { useParams } from 'react-router-dom';
import { Typography, Button, Modal, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { useAddProductToCartMutation } from '../../redux/apiSlice';
import { addItemToCart } from '../../redux/cartSlice';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartItemsData, setCartItemsData] = useState([]);

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

  const [addProductToCart] = useAddProductToCartMutation();

  const handleAddToCart = async () => {
    if (!user) {
      console.log('Пользователь не залогинен, не могу добавить товар в корзину');
      return;
    }

    setIsAddingToCart(true);

    try {
      const { data } = await addProductToCart({ userId: user.id, productId: product.id });
      dispatch(addItemToCart(data));
    } catch (error) {
      console.error('Ошибка при добавлении товара в корзину:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const cartItems = useSelector(state => state.cart.items);

  const handleViewCart = () => {
    console.log('Содержимое корзины:', cartItems);
    setIsCartModalOpen(true);

    const stringifiedCartItems = cartItems.map(item => JSON.stringify(item.products));
    setCartItemsData(stringifiedCartItems);
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return null;

  return (
    <ProductLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '350px', margin: '0 auto', border: '1px solid lightgray', padding: '40px', borderRadius: '10px' }}>
        <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px' }} />
        <Typography variant="subtitle1" style={{fontWeight:'700', color:'green', textAlign: 'center'}}>{product.title}</Typography>
        <Typography variant="body2" style={{fontWeight:'700', color:'red', textAlign: 'center'}}>{product.price} $</Typography>
        <Typography variant="body2" style={{ textAlign: 'center' }}>{product.description}</Typography>
        <Button variant="contained" color="success" onClick={handleAddToCart} disabled={isAddingToCart} style={{ marginTop: '20px' }}>
          {isAddingToCart ? 'Adding to cart...' : 'Add to cart'}
        </Button>
        <Button variant="outlined" color="success" onClick={handleViewCart} style={{ marginTop: '10px' }}>
          Show cart
        </Button>
        <Modal
          open={isCartModalOpen}
          onClose={handleCloseCartModal}
          aria-labelledby="cart-modal-title"
          aria-describedby="cart-modal-description"
        >
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
            <Typography id="cart-modal-title" variant="h6" component="h2">
              Cart
            </Typography>
            <Typography id="cart-modal-description" sx={{ mt: 2 }}>
  {cartItemsData.map((item, index) => (
    <div key={index}>
      <pre>{JSON.stringify(JSON.parse(item), null, 2)}</pre>
    </div>
  ))}
</Typography>
          </Box>
        </Modal>
      </div>
    </ProductLayout>
  );
};

export default ProductPage;
