import '../../css/Nav/NavBar.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    // Sticky navbar
    useEffect(() => {
        const navbar = document.getElementById("navbar");
        const sticky = navbar.offsetTop;

        const handleScroll = () => {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Select brand
    const [selectedBrand, setSelectedBrand] = useState("Selected Brand");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsDropdownOpen(false); // Close dropdown on scroll
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <nav id="navbar" className="nav">
                <div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown}>
                            {selectedBrand} <i className={`fa-solid fa-caret-${isDropdownOpen ? "up" : "down"}`}></i>
                        </button>
                        <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
                            <Link to="/panasonic" onClick={() => handleBrandSelect("Panasonic")}>Panasonic</Link>
                            <Link to="/lg" onClick={() => handleBrandSelect("LG")}>LG</Link>
                            <Link to="/toshiba" onClick={() => handleBrandSelect("Toshiba")}>Toshiba</Link>
                        </div>
                    </div>
                    <Link to='/' className="navbar">Home</Link>
                    <Link to='/products' className="navbar">Products</Link>
                </div>
                <div className='right'>
                    <Link to="/contact" className="navbar">Contact Us</Link>
                    <Link to="/Blog" className="navbar">Blog</Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
