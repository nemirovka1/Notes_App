import {Redirect} from 'react-router-dom';
import { useContext, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { useAuth } from 'hooks/use-auth';
import {removeUser} from '../store/slice/userSlice'
import { FirebaseContext } from 'notesPages/context/firebase/firebaseContext';
import { NotesForm } from 'notesPages/notesForm';
import { NotesList } from 'notesPages/NotesList';
import '../commponents/commponents.css'
const HomePage = () => {
    const dispatch = useDispatch();
    const {notes,fetchNotes,removeNote}=useContext(FirebaseContext);
    useEffect(()=>{
      fetchNotes()
    },[])

    const {isAuth,email} = useAuth();

    return isAuth ? (
        <div className='contanier-notes'>
           <div className="panel">
           <h1 className='title'>Notes App</h1>
            <div className="person_panel">
                <p className='weclome'>Welcome, {email} </p>
            <button className='button-notes'
                onClick={()=> dispatch(removeUser())}
            >EXIT</button>
            </div>
           </div>
            <div className='notes-list'>
                <NotesForm/>
                <hr/>
                <NotesList notes={notes} onRemove={removeNote}/>
            </div>
        </div>
    ) : (
        <Redirect to="/login" />
    )
}
export default HomePage


