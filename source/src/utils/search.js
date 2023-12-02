// Trong component Search
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../css/Search/Search.css';

const Search = ({ onSearch, ProductType, searchValue }) => {
    const [searchInput, setSearchInput] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [showCartText, setShowCartText] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        onSearch(e.target.value);
    };

    const handleSelectChange = (e) => {
        const selectedType = e.target.value;
        setSelectedType(selectedType);
        ProductType(selectedType);
        // Kích hoạt tìm kiếm ngay khi chọn option
        onSearch(searchInput, selectedType);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/products');
        onSearch(searchInput, selectedType);
    };

    return (
        <div className="search_bar">
            <div className="search_bar_list">
                <div className="search_bar_list_item search_item">
                    <Link to="/" className="name_shop">
                        <img src="./data/assets/logo/logo_v2_2100x700px.png" alt="logo" className="logo_nav" />
                    </Link>
                    <p className="name_shop_descripton">Online home appliance supplier</p>
                </div>
            </div>
            <div className="search_bar_list">
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
                            <i class="fa-solid fa-cart-shopping fa-2xl"></i>
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
