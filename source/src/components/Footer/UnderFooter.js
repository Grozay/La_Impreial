//footer
import { Link } from 'react-router-dom'
import '../../css/Footer/UnderFooter.css'
const UnderFooter = () => {
    return (
        <div className="under_footer">
            <div className='under_footer_list'>
                <div className='under_footer_item under_footer_item1'>
                    <Link to="/" className="name_shop_footer">
                        <img src="./data/assets/logo/logo_v2_2100x700px.png" alt="logo" className="logo_footer" />
                    </Link>
                </div>
                <div className='under_footer_item '>
                    <p className='under_footer_item2'>Copyright © La Imperial</p>
                </div>
            </div>
        </div>
    )
}
export default UnderFooter