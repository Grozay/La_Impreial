import React, { useState, useEffect } from 'react';
import './App.css'
import ProductList from './components/Products/ProductList';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './components/AppBar/Nav';
import HomePage from './Home/HomePage/HomePage';
import Heading from './components/Header/Heading';
import Search from './utils/search';
import LG from './Home/Brand/Lg';
import Panasonic from './Home/Brand/Panasonic';
import Toshiba from './Home/Brand/Toshiba';
import Contact from './components/ContactUs/Contact';
import ProductDentail from './components/Products/ProductDetail';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Swal from 'sweetalert2';
import Carlist from './cart/CartList';
import CompareProductsPage from './components/Products/CompareProductsPage';
import NotFound from './components/NotFound/NotFound'
// import Cursor from './components/Cursor/Cursor'

function App() {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [lgProduct, setLgProduct] = useState([]);
  const [panasonicProduct, setPanasonicProduct] = useState([]);
  const [toshibaProduct, setToshibaProduct] = useState([]);
  const [search, setSearch] = useState({ value: '', type: '' });
  const [productHot, setProductHot] = useState([])
  const [productNew, setProductNew] = useState([])
  const [productQuality, setProductQuality] = useState([])
  // const [searchValue, setSearchValue] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const [cart, setcart] = useState([]);
  const [users, setUser] = useState([]);
  const homepage = useNavigate();
  const [erroLogin, setErrorLogin] = useState('');
  const MainAlert = Swal.mixin({
    showConfirmButton: false,
    timer: 1000,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilterProduct(data);
        setLgProduct(data.filter(p => p.brand === 'LG').slice(0, 20));
        setPanasonicProduct(data.filter(p => p.brand === 'Panasonic').slice(0, 20));
        setToshibaProduct(data.filter(p => p.brand === 'toshiba').slice(0, 20));
        const evenIdProducts = data.filter(p => p.id % 2 === 0);
        setProductHot(evenIdProducts)
        const oddIdProducts = data.filter(p => p.id % 2 !== 0);
        setProductNew(oddIdProducts)
        const qualityIdProducts = data.filter(p => p.id <= 15);
        setProductQuality(qualityIdProducts)  // Fix typo here
      })
      .catch(error => console.log('error reading json', error));
  }, []);
  const deleteFormCart = (id) => {
    const deleteCarts = cart.filter(c => c.id !== id);
    setcart(deleteCarts);
  }
  const addToCart = (pro, quantity) => {

    const itemsToAdd = Array.from({ length: quantity }, () => pro);


    setcart([...cart, ...itemsToAdd]);
  }
  useEffect(() => {
    fetch('/data/user.json')
      .then(response1 => response1.json())
      .then(data1 => {
        // const localUsers = getUsersFromLocal();
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
      MainAlert.fire({
        icon: "success",
        title: "Logging successfully"
      });
      homepage('/products/')
    } else {
      MainAlert.fire({
        icon: "error",
        title: "Invalid username or password"
      });
      // setErrorLogin('Invalid username or password')
    }
  }
  //register
  const handleRegister = (newUser) => {
    setUser([...users, newUser]);
    // saveUsersToFile([...users, newUser]);
    saveUsersToLocal([...users, newUser]);
    console.log('User registered successfully');
  };

  //Login = API
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
      localStorage.setItem('userData', JSON.stringify(data)); //  là một phương thức trong JavaScript được sử dụng để chuyển đổi một đối tượng JavaScript thành một chuỗi JSON.
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
    setSearchedProducts(productSearch)
    setNoResults(productSearch.length === 0);
  };


  //search type
  const handleSearchType = (ProductType) => {
    setSearch({ value: search.value, type: ProductType });
    MySearchProduct(search.value, ProductType);
  };

  //sort product
  const MySortProduct = (sortOption) => {
    let sortedProducts;

    switch (sortOption) {
      case "nameAsc":
        sortedProducts = [...searchedProducts].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        sortedProducts = [...searchedProducts].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "priceAsc":
        sortedProducts = [...searchedProducts].sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sortedProducts = [...searchedProducts].sort((a, b) => b.price - a.price);
        break;
      default:
        // Nếu là tùy chọn "Mặc định", sử dụng searchedProducts
        sortedProducts = [...searchedProducts];
        break;
    }

    setFilterProduct(sortedProducts);
  };




  return (
    <div className="App">
      <Heading />
      <Search onSearch={MySearchProduct} ProductType={handleSearchType} searchValue={search.value} />
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage productHot={productHot} productNew={productNew} productQuality={productQuality} />} />
        <Route
          path="/products"
          element={
            noResults ? (
              <p className='no-results-message'>No Found Products</p>
            ) : (
              <ProductList products={filterProduct} addCart={addToCart} onSort={MySortProduct} />
            )
          }
        />
        <Route path="/lg" element={<LG addCart={addToCart} lgProduct={lgProduct} />} />
        <Route path="/panasonic" element={<Panasonic addCart={addToCart} panasonicProduct={panasonicProduct} />} />
        <Route path="/toshiba" element={<Toshiba addCart={addToCart} toshibaProduct={toshibaProduct} />} />
        <Route path="/contact" element={<Contact onAdd={handleAdd} />} />
        <Route path='/products/:id' element={<ProductDentail productDentail={filterProduct} addCart={addToCart} />} />
        <Route path='/account' element={<Login checkLogin={checkLogin} erroLogin={erroLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path='/cart' element={<Carlist carts={cart} deleteCart={deleteFormCart} />} />
        <Route path="/compare/:id*" element={<CompareProductsPage productDentail={products} addCart={addToCart} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <div>
        <Cursor />
      </div> */}
    </div>
  );
}

export default App;
