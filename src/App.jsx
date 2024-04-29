import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage'; 
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/jewelery" element={<CategoryPage category="jewelery" />} />
          <Route path="/electronics" element={<CategoryPage category="electronics" />} />
          <Route path="/men's clothing" element={<CategoryPage category="men's clothing" />} />
          <Route path="/women's clothing" element={<CategoryPage category="women's clothing" />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
