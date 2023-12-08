// import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/Nav/NavBar.css";
import { useEffect } from "react";

function Nav() {
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

        window.onscroll = handleScroll;

        return () => {
            window.onscroll = null; // Clear the event listener when the component unmounts
        };
    }, []);
    return (
        <div>
            <nav id="navbar" className="nav">
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Selected Brand<i className="fa-solid fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <NavLink to="/panasonic" activeClassName="active">panasonic</NavLink>
                            <NavLink to="/lg" activeClassName="active">LG</NavLink>
                            <NavLink to="/toshiba" activeClassName="active">Toshiba</NavLink>
                        </div>
                    </div>
                    <NavLink to="/" className="navbar" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/products" className="navbar" activeClassName="active">
                        Products
                    </NavLink>
                </div>
                <div className="right">
                    <NavLink to="/contact" className="navbar" activeClassName="active">
                        Contact Us
                    </NavLink>
                    <NavLink to="/Blog" className="navbar" activeClassName="active">
                        Blog
                    </NavLink>
                </div>
            </nav>

        </div>
    );
}

export default Nav;
