import { Link } from 'react-router-dom'
import '../../css/Heading/Heading.css'
const Heading = () => {
    return (
        <>
            <nav className='header_navbar'>
                <ul className='header_navbar_list'>
                    <li className='header_bavbar_item'>
                        <i class="fa-regular fa-envelope"></i>
                        thieunu@gmail.com
                    </li>
                    <li className='header_bavbar_item'>

                        <Link to="/contact" className='header_bavbar_item_link header_bavbar_item_link1'><i class="fa-solid fa-location-dot"></i>Locate Us</Link>
                    </li>
                    <li className='header_bavbar_item'>
                        <i class="fa-solid fa-phone"></i>
                        09123456789
                    </li>
                </ul>
                <ul className='header_navbar_list'>
                    <li className='header_bavbar_item'>
                        <Link to="/cart" className='header_bavbar_item_link header_bavbar_item_link1'>Cart</Link>
                    </li>
                    <li className='header_bavbar_item'>
                        <Link to="/account" className='header_bavbar_item_link header_bavbar_item_link1'>My Account</Link>
                    </li>
                </ul>
            </nav >


        </>
    )
}
export default Heading