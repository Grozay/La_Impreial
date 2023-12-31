
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
import AboutUs from './components/AboutUs/AboutUs';
import Pay from './components/Pay/Pay';
import Blog from './components/Blog/Blog';
import BlogDetail from './components/Blog/BlogDetails';
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
  const [isSearching, setIsSearching] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [filterblogs, setFilterBlogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        const evenIdProducts = (data.filter(p => p.id % 2 === 0).slice(0, 4));
        setProductHot(evenIdProducts)
        const oddIdProducts = (data.filter(p => p.id % 2 !== 0).slice(0, 4));
        setProductNew(oddIdProducts)
        const qualityIdProducts = (data.filter(p => p.id <= 15).slice(0, 4));
        setProductQuality(qualityIdProducts)  // Fix typo here
      })
      .catch(error => console.log('error reading json', error));
  }, []);



  //DATA BLOG
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsJson = await fetch('/data/blog.json');
        const blogsData = await blogsJson.json();
        setBlogs(blogsData);
        setFilterBlogs(blogsData);
        console.log(blogs);
      } catch (error) {
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);


  const deleteCartItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setcart(updatedCart);
  };
  const deleteFormCart = (id) => {
    const index = cart.findIndex(item => item.id === id);

    // Nếu tìm thấy sản phẩm trong giỏ hàng, thực hiện xóa
    if (index !== -1) {
      const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
      setcart(updatedCart);
    }
  }

  // const addToCart = (pro, quantity) => {
  //   const existingItem = cart.find(item => item.id === pro.id);

  //   if (existingItem) {
  //     // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
  //     const updatedCart = cart.map(item =>
  //       item.id === pro.id ? { ...item, quantity: item.quantity + quantity } : item
  //     );
  //     setcart(updatedCart);
  //   } else {
  //     // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào giỏ hàng với số lượng mới
  //     setcart([...cart, { ...pro, quantity }]);
  //   }
  // }

  const addToCart = (pro, quantity) => {

    const itemsToAdd = Array.from({ length: quantity }, () => pro);


    setcart([...cart, ...itemsToAdd]);
  }

  const handleUpdateCarts = (updatedCarts) => {
    // Hàm callback để cập nhật trạng thái carts ở component cha
    setcart(updatedCarts);
  };

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
      setIsLoggedIn(true); // Đặt trạng thái đăng nhập thành true
      homepage('/pay/');
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
  const MySearchProduct = (searchInput, productType, priceRange) => {
    console.log('Search Parameters:', searchInput, productType, priceRange);
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
    if (priceRange && priceRange.length > 0) {
      productSearch = productSearch.filter(
        (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
      );
    }
    setIsSearching(searchInput !== '' || productType !== '' || (priceRange && priceRange.length > 0));
    setFilterProduct(productSearch);
    setSearchedProducts(productSearch);
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

      <Search onSearch={MySearchProduct} ProductType={handleSearchType} searchValue={search.value}
        cart={cart} setCart={setcart}
      />
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
              <ProductList products={filterProduct} addCart={addToCart} />
            )
          }
        />
        <Route path="/lg" element={<LG addCart={addToCart} lgProduct={lgProduct} />} />
        <Route path="/panasonic" element={<Panasonic addCart={addToCart} panasonicProduct={panasonicProduct} />} />
        <Route path="/toshiba" element={<Toshiba addCart={addToCart} toshibaProduct={toshibaProduct} />} />
        <Route path="/contact" element={<Contact onAdd={handleAdd} />} />
        <Route path='/products/:id' element={<ProductDentail productDentail={products} addCart={addToCart} />} />
        <Route path='/account' element={<Login checkLogin={checkLogin} erroLogin={erroLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path='/cart' element={<Carlist carts={cart} deleteCart={deleteFormCart} updateCarts={handleUpdateCarts} addCart={addToCart} deleteCartItem={deleteCartItem} />} />
        <Route path="/compare/:id*" element={<CompareProductsPage productDentail={products} addCart={addToCart} />} />
        <Route path='/about' element={<AboutUs />} />
        <Route
          path="/pay"
          element={
            isLoggedIn ? (
              <Pay />
            ) : (
              <Navigate to="/account" />
            )
          }
        />
        <Route path='/blog' element={<Blog blogs={blogs} />} />
        <Route path="/blogdetail/:id" element={<BlogDetail blogs={blogs} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <div>
        <Cursor />
      </div> */}
    </div>
  );
}

export default App;
// Đang hiển thị 3172500192301070096.