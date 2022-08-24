import { useContext ,useState } from "react"
import { FirebaseContext } from "./context/firebase/firebaseContext";
import '../commponents/commponents.css'
export const NotesForm = () => {
  const [value, setValue] = useState('')
  const firebase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert('Заметка была создана', 'success')
      }).catch(() => {
        alert('Что-то пошло не так', 'danger')
      })
      setValue('')
    } else {
      alert('Введите название заметки')
    }
  }

  return (
    <form onSubmit={submitHandler} >
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter notes . . ."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}