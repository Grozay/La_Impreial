import React, { useState, useEffect } from 'react';
import './App.css'
import ProductList from './components/Products/ProductList';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/AppBar/Nav';
import HomePage from './Home/HomePage';
import Heading from './components/Header/Heading';
import Search from './utils/search';
import LG from './Home/Brand/Lg';
import Panasonic from './Home/Brand/Panasonic';
import Toshiba from './Home/Brand/Toshiba';
import Contact from './components/ContactUs/Contact';
import ProductDentail from './components/Products/ProductDetail';

function App() {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [lgProduct, setLgProduct] = useState([]);
  const [panasonicProduct, setPanasonicProduct] = useState([]);
  const [toshibaProduct, setToshibaProduct] = useState([]);
  const [search, setSearch] = useState({ value: '', type: '' });
  // const [searchValue, setSearchValue] = useState('');
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilterProduct(data);
        setLgProduct(data.filter(p => p.brand === 'LG').slice(0, 20));
        setPanasonicProduct(data.filter(p => p.brand === 'Panasonic').slice(0, 20));
        setToshibaProduct(data.filter(p => p.brand === 'toshiba').slice(0, 20));
      })
      .catch(error => console.log('error reading json', error));
  }, []);

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct]);
    setFilterProduct([...filterProduct, newProduct]);
  };


  //search name vs type
  const MySearchProduct = (searchInput, productType) => {
    setSearch({ value: searchInput, type: productType });
    let productSearch;

    if (!searchInput && productType !== null && productType !== undefined && productType !== '') {
      productSearch = products.filter((p) => p.type === productType);
    } else if (!searchInput && (!productType || productType === '')) {
      productSearch = products;
    } else {
      productSearch = products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchInput.toLowerCase()) &&
          (!productType || p.type === productType)
      );
    }

    setFilterProduct(productSearch);
    setNoResults(productSearch.length === 0);
  };

  //search type
  const handleSearchType = (ProductType) => {
    setSearch({ value: search.value, type: ProductType });
    MySearchProduct(search.value, ProductType);
  };


  return (
    <div className="App">
      <Heading />
      <Search onSearch={MySearchProduct} ProductType={handleSearchType} searchValue={search.value} />
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={

            noResults ? (
              <p className='no-results-message'>No Found Products</p>
            ) : (
              <ProductList products={filterProduct} />
            )
          }
        />
        <Route path="/lg" element={<LG lgProduct={lgProduct} />} />
        <Route path="/panasonic" element={<Panasonic panasonicProduct={panasonicProduct} />} />
        <Route path="/toshiba" element={<Toshiba toshibaProduct={toshibaProduct} />} />
        <Route path="/contact" element={<Contact onAdd={handleAdd} />} />
        <Route path='/products/:id' element={<ProductDentail productDentail={filterProduct} />} />
      </Routes>
    </div>
  );
}

export default App;
