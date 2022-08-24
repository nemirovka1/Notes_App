import { Login } from "commponents/Login"
import { Link } from "react-router-dom"
import '../commponents/commponents.css'

const LoginPage = () => {
  return (
    <div className="form">
     <h1 className="title">Login</h1>
     <Login/>
        <p className="form-link">
            Go to <Link to="/register">Register</Link>
        </p>
    </div>
  )
}

export default LoginPage