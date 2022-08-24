import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {setUser} from 'store/slice/userSlice';
import '../commponents/commponents.css'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const dispatch=useDispatch();
    const {push} =useHistory();
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');

    const handelRegister=(email,password,name)=>{
        const auth=getAuth();
        createUserWithEmailAndPassword(auth,email,password,name)
            .then(({user})=>{
                console.log(user);
                dispatch(setUser({
                    email:user.email,
                    user:user.uid,
                    name:user.name,
                    token:user.accessToken
                }));
               push('/');
            })
            .catch(console.error)
            if(email.length===0 || password.length===0 || name.length===0){
            return (
               alert('Print email and password')
              ) 
          }
          if (password.length <6){
            alert('Password should be at least 6 characters')
            setEmail('')
            setName('')
            setPass('')
        }
    }
  return (
    <div className='form'>
      <input
        className='form-input'
        type="name"
        name="" id="" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder='name'/>
      <input 
        className='form-input form-input-email'
        type="email" 
        name=""
        id=""
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='email'/>
      <input
        className='form-input form-input-password'
        type="password"
        name="" id="" 
        value={pass}
        onChange={(e)=>setPass(e.target.value)}
        placeholder='password'/>
   
    <button
        className='form-button'
        onClick={()=>handelRegister(email,pass)}>
            Register
        </button>
      </div>
    )
}
  
export {SignUp}
