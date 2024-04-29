import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const CartButton = () => {
  const user = useSelector(selectUser);
  const cartItems = user && user.cartItems ? user.cartItems : [];

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        Cart ({cartItems.length})
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cart</DialogTitle>
        <DialogContent>
          {cartItems.length ? (cartItems.map(item => (
            <div key={item.productId}>
              <Typography>{item.product.title}</Typography>
              <Typography>{item.product.price} $</Typography>
              <Typography>Quantity: {item.quantity}</Typography>
            </div>
          ))
          ) : (
            <Typography>Cart is empty</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartButton;
