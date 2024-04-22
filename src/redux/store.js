import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { fakeStoreApi } from './apiSlice';

const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fakeStoreApi.middleware),
});

setupListeners(store.dispatch);

// export { store };

export default store
