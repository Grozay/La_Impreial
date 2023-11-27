//nav
import '../../css/Nav/NavBar.css'
import { Link } from "react-router-dom";
function Nav() {
    return (
        <div>
            <nav className="nav">
                <div>
                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
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
                    <Link to="about" className="navbar">About Us</Link>
                </div>

            </nav>
        </div>
    );
}
export default Nav;