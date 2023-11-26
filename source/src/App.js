import './App.css';
import { useState, useEffect } from 'react';
import ProductList from './components/Products/ProductList';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/AppBar/Nav'
import HomePage from './Home/HomePage'
import Heading from './components/Header/Heading';
import Search from './utils/search';
function App() {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilterProduct(data);
      })
      .catch(error => console.log('error reading json', error));
  }, []);




  return (
    <div className="App">
      <Heading />
      <Search />
      <hr />
      <nav>
        <NavBar />
      </nav>


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductList products={products} />} />
      </Routes>
    </div>
  );
}

export default App;
