import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Массив для хранения товаров в корзине
  },
  reducers: {
    addItemToCart(state, action) {
      state.items.push(action.payload); // Добавляем товар в корзину
    },
    // Другие действия для удаления товара из корзины, изменения количества и т.д.
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
