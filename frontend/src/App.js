import React from 'react';
import Home from './Pages/Home';
import './App.css';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Checkout from './Pages/Checkout';
import ProductDetailPage from './Pages/ProductDetailPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import CartPage from './Pages/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
  path: '/cart',
  element: <CartPage></CartPage>,
},
{ 
  path: '/checkout',
  element: <Checkout></Checkout>,
},
{ 
  path: '/product-detail',
  element: <ProductDetailPage></ProductDetailPage>,
},

]);

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
