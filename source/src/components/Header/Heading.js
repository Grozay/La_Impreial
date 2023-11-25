import { Link } from 'react-router-dom'
import '../../css/Heading/Heading.css'
const Heading = () => {
    return (
        <>
            <div className='boxHeading'>
                <div className="heading">
                    <div>
                        this is Header
                    </div>
                    <div className='account'>
                        <Link to="/account" className='myAccount'>My Account</Link>
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}
export default Heading