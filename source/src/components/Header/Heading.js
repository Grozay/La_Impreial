import { NavLink } from 'react-router-dom'
import '../../css/Heading/Heading.css'


const Heading = () => {
    //     const [users, setUser] = useState([]);
    //   const homepage = useNavigate();
    //   const [erroLogin, setErrorLogin] = useState('');
    //     const deleLocalStorage = () => { localStorage.clear(); }
    //   useEffect(() => {
    //     fetch('/data/user.json')
    //       .then(response1 => response1.json())
    //       .then(data1 => {
    //         setUser(data1);
    //       })
    //       .catch(error => console.log('error reading json', error));
    //   }, []);

    // //login 
    // const checkLogin = (checkUser) => {
    //     const findUser = users.find(u => u.username === checkUser.username && u.password === checkUser.password);
    //     if (findUser != null) {
    //       homepage(`/products/`)
    //       localStorage.setItem('username', checkUser.username);
    //       setErrorLogin('');
    //     } else {
    //       setErrorLogin('Invalid username or password')
    //     }
    //   }
    const deleLocalStorage = () => { localStorage.clear(); }
    return (
        <>
            <nav className='header_navbar'>
                <ul className='header_navbar_list '>
                    <li className='header_bavbar_item'>

                        <a href="mailto:thieunu@gmail.com" className='header_bavbar_item_link header_bavbar_item_link1'><i class="fa-regular fa-envelope"></i>thieunu@gmail.com</a>
                    </li>
                    <li className='header_bavbar_item'>

                        <NavLink to="/contact" className='header_bavbar_item_link header_bavbar_item_link1' activeClassName="active"><i class="fa-solid fa-location-dot"></i>Locate Us</NavLink>
                    </li>
                    <li className='header_bavbar_item'>
                        <i class="fa-solid fa-phone"></i>
                        09123456789
                    </li>
                </ul>
                <ul className='header_navbar_list'>
                    <li className='header_bavbar_item'>
                        <NavLink to="/cart" className='header_bavbar_item_link header_bavbar_item_link1' activeClassName="active">Cart</NavLink>
                    </li>
                    <li className='header_bavbar_item'>
                        {/* <Link to="/account" className='header_bavbar_item_link header_bavbar_item_link1'>My Account</Link> */}
                        {/* <Link to="/register" style={{textDecoration: "none"}}>Register</Link> */}
                        {localStorage.getItem('username') ?
                            (<span className='avatar'>
                                welcome {localStorage.getItem('username')},
                                <NavLink to="/account" onClick={() => deleLocalStorage()} className='header_bavbar_item_link header_bavbar_item_link1'  >Logout</NavLink></span>

                            ) :
                            (<NavLink to="/account" className='header_bavbar_item_link header_bavbar_item_link1' activeClassName="active">My Account</NavLink>)
                        }
                    </li>
                </ul>

            </nav >


        </>
    )
}
export default Heading;