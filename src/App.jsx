// App.jsx
import React from 'react';
import { Provider } from 'react-redux'; // импортируем Provider из react-redux
import store from './redux/store'; // импортируем Redux store
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Provider store={store}> {/* обертка App в Provider с передачей store */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
