import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import NavigationBar from './components/Navigation/NavigationBar';
import { BrowserRouter as Router, Route, Routes, Navigate    } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import ProductList from './components/Product/ProductList';
import ProductDetails from './components/Product/ProductDetails';
import Carts from './components/ShoppingCart/Carts';
import Forgot from './components/Authentication/Forgot';

function App() {
  const isAuth = useSelector((state) => state.user.auth);

  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Routes>
          {isAuth &&(
            <>
              <Route path="/mycarts" element={<Carts />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/productlist/:id" element={<ProductDetails />} />
            </>
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path='*' element={ <Navigate to="/login" /> }/>
        </Routes>
        
      </Router>
    </Provider>
  );
}

export default App;
