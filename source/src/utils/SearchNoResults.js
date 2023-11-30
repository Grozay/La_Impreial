import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Search/SearchNoResults.css';
import './search'

const SearchNoResults = ({ onSearch, ProductType }) => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Chỉ gọi hàm onSearch khi có ít nhất một tiêu chí được nhập
        if (searchValue || ProductType) {
            onSearch({ name: searchValue, type: ProductType });
            navigate('/products');
        }
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <>

            <form className="search-under-products" onSubmit={handleSubmit}>
                <p className="text_search">
                    Enter search keywords
                </p>
                <input
                    className="input_search"
                    type="text"
                    value={searchValue}
                    placeholder="search by name"
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn_search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <p className="notfount_search">Product not found</p>
        </>
    );
};

export default SearchNoResults;
