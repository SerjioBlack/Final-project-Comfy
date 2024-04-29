import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { fakeStoreApi } from './apiSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice'; // Импортируем редьюсер для корзины

const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    user: userReducer,
    cart: cartReducer, // Добавляем редьюсер корзины в store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
});

setupListeners(store.dispatch);

export default store;
