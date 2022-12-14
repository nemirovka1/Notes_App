import { SHOW_LOADER,ADD_NOTE,FETCH_NOTES,REMOVE_NOTE} from "../type"

const handlers ={
  [SHOW_LOADER]:state =>({...state,loading:true}),
  [ADD_NOTE]: (state,{payload}) =>({
    ...state,
    notes:[...state.notes,payload]
  }),
  [FETCH_NOTES] :(state,{payload})=>({...state,notes:payload}),
  [REMOVE_NOTE] :(state,{payload})=>({
    ...state,
    notes:state.notes.filter(note=>note.id !==payload)
  }),
  DEFAULT:state=>state
}
export const firebaseReducer = (state,action ) => {
    const handle=handlers[action.type]|| action.DEFAULT
  return handle(state,action)
}
