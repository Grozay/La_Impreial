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
                    <p>location</p>
                    <p>tel:(84) 123456789</p>
                    <p>email: thieunu@gmail.com</p>
                </div>

                <div className='footer_link'>
                    <p>Quick Links</p>
                    <div>
                        <div>
                            <div>></div>
                            <div> <Link to="/">Home</Link></div>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div>
                        <div>
                            <div>></div>
                            <div> <Link to="/products">Products</Link></div>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div>
                        <div>
                            <div>></div>
                            <div> <Link to="/about">About Us</Link></div>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div>
                        <div>
                            <div>></div>
                            <div> <Link to="/contact">Contact US</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer