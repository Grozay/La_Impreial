import { useState } from "react"
import { Link } from "react-router-dom";
// import '../CSS/login.css'
function Login({ checkLogin, erroLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const deleLocalStorage = () => { localStorage.clear(); }
    
    const handLogin = (e) => {
        e.preventDefault();
        const checkUser = { username, password };
        checkLogin(checkUser);
        setUsername('');
        setPassword('');
    }

    
    return (

        <div class="container">
            <div class="content">
                <div class="form">
                    <form onSubmit={handLogin} >
                        <h4>{erroLogin}</h4>
                        <div class="top">
                            <h2>Login</h2>
                        </div>
                        <div class="input">
                            <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div class="input">
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                       
                        <div>
                            <input type="submit" value="Login" />
                        </div>
                        <p>
                            Do not have an account?{" "}
                            <Link to="/register" style={{textDecoration: "none"}}>Register</Link>
                         </p>
                    </form>
                </div>
            

            </div>
        </div>

    )
} export default Login;