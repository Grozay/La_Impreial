

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../css/Search/Search.css';
import SearchNoResults from './SearchNoResults';

const Search = ({ onSearch, ProductType }) => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Chỉ gọi hàm onSearch khi có ít nhất một tiêu chí được nhập
        if (searchValue || selectedType) {
            onSearch({ name: searchValue, type: selectedType });
            navigate('/products');
        }
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
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
                    <select className="search_select" value={selectedType} onChange={handleTypeChange}>
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
                <form className="search_bar_list search_bar_form" onSubmit={handleSubmit}>
                    <input
                        className="input_search"
                        type="text"
                        value={searchValue}
                        placeholder="Search By Name"
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="btn_search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <div className="search_bar_list">
                    <Link to="/cart" className="btn_cart_icon"><i class="fa-solid fa-cart-shopping fa-2xl"></i></Link>
                </div>
            </div>

        </div >
    )

}
export default Search