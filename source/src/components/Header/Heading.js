import { Link } from 'react-router-dom'
import '../../css/Heading/Heading.css'
const Heading = () => {
    return (
        <div className='boxHeading'>
            <div className="heading">
                <div>
                    this is Header
                </div>
                <div>
                    <Link to="/account" className='myAccount'>My Account</Link>
                </div>
            </div>
            <hr />
        </div>
    )
}
export default Heading