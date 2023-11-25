import { Link } from 'react-router-dom'
import '../../css/Heading/Heading.css'
const Heading = () => {
    return (
        <div className='full'>
            <div className="heading">
                <div>
                    this is Header
                </div>
                <Link to="/account" className='myAccount'>My Account</Link>
            </div>
            <hr />
        </div>
    )
}
export default Heading