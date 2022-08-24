import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {setUser} from 'store/slice/userSlice';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init ({
    position: 'center-top',
    distance: '80px',
    timeout: 2000,
    cssAnimationStyle: 'from-top',
    showOnlyTheLastOne: true,
});
const Login = () => {
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
            return Notify.warning('Sorry, there are no images matching your search query. Please try again.');
        }
    }
  return (
    <Form
        title="Sign in"
        handelClick={handelLogin}
    />)
}

export {Login}
