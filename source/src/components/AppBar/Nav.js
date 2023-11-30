//nav
import '../../css/Nav/NavBar.css'
import { Link } from "react-router-dom";
function Nav() {
    // const searchProductBrand = (event) => {
    //     const ProductBrand = event.target.value;
    //     ProductBrands(ProductBrand);
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    return (
        <div>
            <nav className="nav">
                <div>
                    <div class="dropdown">
                        <button class="dropbtn">Selected Brand<i class="fa-solid fa-caret-down"></i></button>
                        <div class="dropdown-content">
                            <Link to="panasonic">panasonic</Link>
                            <Link to="lg">LG</Link>
                            <Link to="toshiba">Toshiba</Link>
                            {/* <div className='dropdown-content_btn' onChange={searchProductBrand} onSubmit={handleSubmit}>
                                <button value="LG">LG</button>
                                <button value="Panasonic">panasonic</button>
                                <button value="toshiba">Toshiba</button>
                            </div> */}
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