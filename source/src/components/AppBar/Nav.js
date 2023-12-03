//nav
import '../../css/Nav/NavBar.css'
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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

    return (
        <div>
            <nav id="navbar" className="nav">
                <div>
                    <div class="dropdown">
                        <button class="dropbtn">Selected Brand<i class="fa-solid fa-caret-down"></i></button>
                        <div class="dropdown-content">
                            <Link to="panasonic">panasonic</Link>
                            <Link to="lg">LG</Link>
                            <Link to="toshiba">Toshiba</Link>
                        </div>
                    </div>
                    <Link to='/' className="navbar">Home</Link>
                    <Link to='/products' className="navbar">Products</Link>

                </div>
                <div className='right'>
                    <Link to="contact" className="navbar">Contact Us</Link>
                    {/* <Link to="about" className="navbar">About Us</Link> */}
                    <Link to="Blog" className="navbar">Blog</Link>
                </div>

            </nav>
        </div>
    );
}
export default Nav;