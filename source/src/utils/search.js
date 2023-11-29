

import { Link, useNavigate } from "react-router-dom"
import '../css/Search/Search.css'
//search
const Search = ({ onSearch, searchValue }) => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue);
        navigate('/products');
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
                    <select className="search_select">
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
                    <input className="input_search" type="text" value={searchValue} placeholder="Search By Name" onChange={(e) => onSearch(e.target.value)} />
                    <button className="btn_search"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div className="search_bar_list">
                    <Link to="/cart" className="btn_cart_icon"><i class="fa-solid fa-cart-shopping fa-2xl"></i></Link>
                </div>
            </div>

        </div>
    )

}
export default Search