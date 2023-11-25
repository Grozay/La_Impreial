import './App.css';
import { useState, useEffect } from 'react';
import ProductList from './components/Products/ProductList';
import { Routes, Route, Link  } from "react-router-dom";
import Nav from './components/AppBar/Nav'
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
      <nav>
        <Link to='/'>Home</Link> <br/>
        <Link to='/products'>Products</Link> <br/>
      </nav>


      <Routes>
        <Route path='/' element={<Nav/>} />
        <Route path='/products' element={<ProductList products={products}/>} />
      </Routes>
    </div>
  );
}

export default App;
