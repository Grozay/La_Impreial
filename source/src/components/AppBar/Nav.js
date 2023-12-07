import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Nav/NavBar.css";

function Nav() {
    return (
        <div>
            <nav className="nav">
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
