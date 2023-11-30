import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Search/SearchNoResults.css'

const SearchNoResults = ({ onSearch }) => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gọi hàm onSearch chỉ khi có ít nhất một tiêu chí được nhập
        if (searchValue || selectedType) {
            onSearch({ name: searchValue, type: selectedType });
            navigate('/products');
        }
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
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
    );
};

export default SearchNoResults;
