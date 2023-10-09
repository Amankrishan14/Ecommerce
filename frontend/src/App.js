import React from 'react';

import './App.css';
import ProductList from './features/product-list/ProductList';
import Navbar from './features/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
         <ProductList></ProductList>

    </div>
  );
}

export default App;
