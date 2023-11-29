
import './App.css';
import { useState, useEffect } from 'react';
import ProductList from './components/Products/ProductList';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/AppBar/Nav'
import HomePage from './Home/HomePage'
import Heading from './components/Header/Heading';
import Search from './utils/search';
import LG from './Home/Brand/Lg';
import Panasonic from './Home/Brand/Panasonic';
import Toshiba from './Home/Brand/Toshiba';
import Contact from './components/ContactUs/Contact';
function App() {
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [lgProduct, setlgProduct] = useState([])
  const [panasonicProduct, setpanasonicProduct] = useState([])
  const [toshibaProduct, setttoshibaProduct] = useState([])
  const [searchValue, setsearchValue] = useState('');

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
        const productdata1 = data;
        const productdata2 = data;
        const productdata3 = data;
        setProducts(data);
        setFilterProduct(data);
        setlgProduct(productdata1.filter(p => p.brand === "LG").slice(0, 20));
        setpanasonicProduct(productdata2.filter(p => p.brand === "Panasonic").slice(0, 20));
        setttoshibaProduct(productdata3.filter(p => p.brand === "toshiba").slice(0, 20));
      })
      .catch(error => console.log('error reading json', error));
  }, []);

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct]);
    setFilterProduct([...filterProduct, newProduct]);
  }

  //search type
  const handleSearchType = (ProductType) => {
    if (ProductType !== '') {
      const filterProductType = products.filter(searchSelect => ProductType === searchSelect.type);
      setFilterProduct(filterProductType);
    } else {
      setFilterProduct(products);
    }
  }
  // const handleSearchType1 = (ProductType1) => {
  //   if (ProductType1 !== '') {
  //     const filterProductType = products.filter(searchSelect => ProductType1 === searchSelect.type);
  //     setFilterProduct(filterProductType);
  //   } else {
  //     setFilterProduct(products);
  //   }
  // }

  //search
  const MySearchProduct = (value) => {
    // console.log('Search value:', value);
    // console.log('All products:', products);
    setsearchValue(value);
    const productSearch = products.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
    setFilterProduct(productSearch);
  };


  return (
    <div className="App">
      <Heading />
      <Search onSearch={MySearchProduct}
        searchValue={searchValue}
        ProductType={handleSearchType} />
      <nav>
        <NavBar />
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductList products={filterProduct} />} />
        <Route path='/lg' element={<LG lgProduct={lgProduct} />} />
        <Route path='/panasonic' element={<Panasonic panasonicProduct={panasonicProduct} />} />
        <Route path='/toshiba' element={<Toshiba toshibaProduct={toshibaProduct} />} />
        <Route path='/contact' element={<Contact onAdd={handleAdd} />} />
      </Routes>
    </div>
  );
}

export default App;