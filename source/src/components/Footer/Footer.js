//footer
import { Link } from 'react-router-dom'
import '../../css/Footer/Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className='footer_main'>
                <div className='footer_location'>
                    <p>Contact Information</p>
                    <p>La Imperial</p>
                    <p>391A Nam Ky Khoi Nghia, district  3.</p>
                    <p>tel:(84) 123456789</p>
                    <p>
                        email: <Link to="mailto:thieunu@gmail.com" className='contact_footer_link'>thieunu@gmail.com</Link>
                    </p>
                    <p>
                        Facebook: <Link to="https://www.facebook.com/quyencutety" className='contact_footer_link'>Fan Page</Link>
                    </p>
                </div>

                <div className='footer_link'>
                    <p>Quick Links</p>
                    <div>
                        <div>
                            <div>></div>
                            <div> <Link to="/" className='footer_link_item'>Home</Link></div>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div>
                        <div>
                            <div>></div>
                            <div> <Link to="/products" className='footer_link_item'>Products</Link></div>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div>
                        <div>
                            <div>></div>
                            <div> <Link to="/about" className='footer_link_item'>About Us</Link></div>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div>
                        <div>
                            <div>></div>
                            <div> <Link to="/contact" className='footer_link_item'>Contact US</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer