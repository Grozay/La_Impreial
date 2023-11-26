import { Link } from "react-router-dom"
import '../css/Search/Search.css'
//search
const Search = () => {
    return (
        <div className="search_bar">
            <div className="search_bar_list">
                <div className="search_bar_list_item search_item">
                    <Link to="/" className="name_shop">La Imperial</Link>
                    <p className="name_shop_descripton">Online home appliance supplier</p>
                </div>

            </div>
            <div className="search_bar_list">
                <div className="search_bar_list_item">
                    <select className="search_select">
                        <option className="search_option">
                            All Categories
                        </option>
                        <option className="search_option">
                            ws
                        </option>
                        <option className="search_option">
                            fridge
                        </option>
                        <option className="search_option">
                            ap
                        </option>
                        <option className="search_option">
                            ac
                        </option>
                        <option className="search_option">
                            tv
                        </option>
                    </select>
                </div>
                <form className="search_bar_list search_bar_form">
                    <input placeholder="search by name" className="input_search" />
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