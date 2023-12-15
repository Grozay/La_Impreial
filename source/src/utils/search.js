// Trong component Search
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../css/Search/Search.css';

const Search = ({ onSearch, cart }) => {
    const [searchInput, setSearchInput] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [showCartText, setShowCartText] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const navigate = useNavigate();

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    console.log(cartCount)

    const handleInputChange = (e) => {
        const inputVal = e.target.value;
        setSearchInput(inputVal);
        onSearch(inputVal, selectedType);
    };

    const handleSelectChange = (e) => {
        const typeVal = e.target.value;
        setSelectedType(typeVal);
        onSearch(searchInput, typeVal);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/products');
        onSearch(searchInput, selectedType);
    };

    const handlePriceChange = (e) => {
        const newPrice = parseInt(e.target.value);
        // console.log('New Price Range:', [0, newPrice]);
        setPriceRange([0, newPrice]);
        onSearch(searchInput, selectedType, [0, newPrice]);
    };

    return (
        <div className="search_bar">
            <div className="search_bar_list">
                <div className="search_bar_list_item search_item">
                    <Link to="/" className="name_shop">
                        <img src="../data/assets/logo/logo_v2_2100x700px.png" alt="logo" className="logo_nav" />
                    </Link>
                    <p className="name_shop_descripton">Online home appliance supplier</p>
                </div>
            </div>
            <div className="search_bar_list">
                <div className="search_bar_list_item search_item">


                    <p className='search_price_p'>Search Price: 0$- {priceRange[1]}$</p>
                    <div className="search_bar_price">
                        <input
                            type="range"
                            min={1}
                            max={1000}
                            value={priceRange[1]}
                            onChange={handlePriceChange}
                            className='search_bar_price_item'
                        />
                    </div>
                </div>

                <div className="search_bar_list_item">
                    <select className="search_select" value={selectedType} onChange={handleSelectChange}>
                        <option className="search_option" value="">
                            All Categories
                        </option>
                        <option className="search_option" value="Washing machine">
                            Washing machine
                        </option>
                        <option className="search_option" value="fridge">
                            fridge
                        </option>
                        <option className="search_option" value="Airless purifier">
                            Airless purifier
                        </option>
                        <option className="search_option" value="AC">
                            air conditioner
                        </option>
                        <option className="search_option" value="Tivi">
                            Tivi
                        </option>
                    </select>
                </div>
                <form className="search_bar_list search_bar_form" onSubmit={handleSearch}>
                    <input
                        className="input_search"
                        type="text"
                        value={searchInput}
                        onChange={handleInputChange}
                        placeholder="Search By Name"
                    />
                </form>
                <div className="search_bar_list">
                    <Link to="/cart" className="btn_cart_icon">
                        <div
                            onMouseEnter={() => setShowCartText(true)}
                            onMouseLeave={() => setShowCartText(false)}
                            className='cart-container'
                        >
                            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                            {/* <span className="cart-item-cartcount">{cartCount > 0 ? cartCount : 0}</span> */}
                            <span className="cart-item-cartcount">{cart.length}</span>

                            {showCartText && <div className='cart-label'>
                                <div className='text'>
                                    Cart
                                </div>
                            </div>}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Search;
