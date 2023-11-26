//nav
import '../../css/Nav/NavBar.css'
import { Link } from "react-router-dom";
function Nav() {
    return (
        <div>
            <nav className="nav">
                <Link to='/' className="navbar">Home</Link>
                <Link to='/products' className="navbar">Products</Link>
                <Link to="contact" className="navbar">Contact Us</Link>
                <Link to="about" className="navbar">About Us</Link>
            </nav>
        </div>
    );
}
export default Nav;