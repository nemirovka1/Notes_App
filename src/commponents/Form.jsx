import {useState} from 'react';
import './commponents.css'

const Form = ({title,handelClick}) => {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('')
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
          onClick={()=>handelClick(email,pass)}>
              {title}
          </button>
  </div>
)
}

export {Form}