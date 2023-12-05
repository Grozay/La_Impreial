import React, { useState, useEffect } from 'react';
import './App.css'

import ProductList from './components/Products/ProductList';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './components/AppBar/Nav';
import HomePage from './Home/HomePage';
import Heading from './components/Header/Heading';
import Search from './utils/search';
import LG from './Home/Brand/Lg';
import Panasonic from './Home/Brand/Panasonic';
import Toshiba from './Home/Brand/Toshiba';
import Contact from './components/ContactUs/Contact';
import ProductDentail from './components/Products/ProductDetail';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
function App() {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [lgProduct, setLgProduct] = useState([]);
  const [panasonicProduct, setPanasonicProduct] = useState([]);
  const [toshibaProduct, setToshibaProduct] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [noResults, setNoResults] = useState(false);
 




  
  const [users, setUser] = useState([]);
  const homepage = useNavigate();
  const [erroLogin, setErrorLogin] = useState('');
    
  useEffect(() => {
    fetch('/data/user.json')
      .then(response1 => response1.json())
      .then(data1 => {
        const localUsers = getUsersFromLocal();
        setUser(data1);
      })
      .catch(error => console.log('error reading json', error));
  }, []);

//login 
const checkLogin = (checkUser) => {
    const findUser = users.find(u => u.username === checkUser.username && u.password === checkUser.password);
    if (findUser != null) {
      setErrorLogin('');
      saveUsersToLocal([...users, checkUser]);
      localStorage.setItem('username', checkUser.username);
      homepage('/products/')
    } else {
      setErrorLogin('Invalid username or password')
    }
  }
  //register
  const handleRegister = (newUser) => {
    setUser([...users, newUser]);
    // saveUsersToFile([...users, newUser]);
    saveUsersToLocal([...users, newUser]);
    console.log('User registered successfully');
  };
  
//luu vao file json
// const saveUsersToFile = (data) => {
//   // Save data to user.json or an API endpoint
//   fetch('/data/user.json', {
//     method: 'PUT', // or 'POST' if you prefer
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((result) => console.log('User data saved:', result))
//     .catch((error) => console.error('Error saving user data', error));
// };

//cach 2
const saveUsersToLocal = (data) => {
  try {
    localStorage.setItem('userData', JSON.stringify(data));
    console.log('User data saved successfully');
  } catch (error) {
    console.error('Error saving user data', error);
  }
};

const getUsersFromLocal = () => {
  try {
    return JSON.parse(localStorage.getItem('userData')) || [];
  } catch (error) {
    console.error('Error retrieving user data', error);
    return [];
  }
};


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

  //search đa tiêu chí
  const MySearchProduct = ({ name, type }) => {
    setSearchValue(name);

    let productSearch = products;

    if (name) {
      productSearch = productSearch.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (type) {
      productSearch = productSearch.filter(p => p.type.toLowerCase() === type.toLowerCase());
    }

    setFilterProduct(productSearch);
    setNoResults(productSearch.length === 0 || name.trim() === '');
  };

  //search type
  const handleSearchType = (ProductType) => {
    if (ProductType !== '') {
      const filterProductType = products.filter(searchSelect => ProductType === searchSelect.type);
      setFilterProduct(filterProductType);
    } else {
      setFilterProduct(products);
    }
  };

  //search ''
  const handleSearch = (searchParams) => {
    MySearchProduct(searchParams);
  };





  return (
    <div className="App">
      <Heading
       />
        
      <Search onSearch={handleSearch} ProductType={handleSearchType} />
      
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={
            localStorage.getItem('username') ? (
            noResults ? (
              <p className='no-results-message'>No Found Products</p>
            ) : (
              <ProductList products={filterProduct} />
            )
            ) : (
              <Navigate to='/account' />
            )
          }
        />
        <Route path="/lg" element={<LG lgProduct={lgProduct} />} />
        <Route path="/panasonic" element={<Panasonic panasonicProduct={panasonicProduct} />} />
        <Route path="/toshiba" element={<Toshiba toshibaProduct={toshibaProduct} />} />
        <Route path="/contact" element={<Contact onAdd={handleAdd} />} />
        <Route path='/products/:id' element={<ProductDentail productDentail={filterProduct} />}/>
        <Route path='/account' element={<Login checkLogin={checkLogin} erroLogin={erroLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
      </Routes>
    </div>
  );
}

export default App;
