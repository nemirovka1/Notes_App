import { SignUp } from "commponents/SignUp"
import { Link } from "react-router-dom"
import '../commponents/commponents.css'

const RegisterPage = () => {
  return (
    <div  className="form">
        <h1 className="title">Register</h1>
        <SignUp/>
        <p className="form-link">
            Already have an account? <Link to ="/login"> Sign in</Link>
        </p>
    </div>
  )
}

export default RegisterPage