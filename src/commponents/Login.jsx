import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {setUser} from 'store/slice/userSlice';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const dispatch = useDispatch();
    const {push} =useHistory();
    const handelLogin=(email,password)=>{
        const auth=getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user})=>{
            console.log(user);
            dispatch(setUser({
                email:user.email,
                user:user.uid,
                token:user.accessToken
            }));
           push('/');
        })
        .catch(alert('Wrong username or password') );
      
        if(email.length === 0 || password.length === 0){
           
        }
    }
  return (
    <div className='form'>
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
        onClick={()=>handelLogin(email,pass)}>
          Login
        </button>
    </div>
)
}

export {Login}
