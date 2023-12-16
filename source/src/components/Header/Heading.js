import { NavLink } from 'react-router-dom'
import '../../css/Heading/Heading.css'


const Heading = () => {
    const deleLocalStorage = () => { localStorage.clear(); }
    return (
        <>
            <nav className='header_navbar'>
                {localStorage.getItem('username') ?
                    (
                        <NavLink to="/account" onClick={() => deleLocalStorage()} className='heading_account_logout'>Logout</NavLink>
                    ) :
                    (<NavLink to="/account" activeClassName="active" className="heading_account">MyAccount</NavLink>)
                }
            </nav >


        </>
    )
}
export default Heading;