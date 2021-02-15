import store, { AppStateType } from './store'
import {
  getNotes, INotes, ISetNewNote, ISetNotes, IState,
  postNotes, setNewNote, setNotes, ISetInputValue, setInputValue
  , ISetLoading, setLoading, deleteNote, updateNote, IEditValue, setEditValue
} from './app'


export {
  store, AppStateType
}

export {
  INotes, IState, ISetNotes, ISetNewNote, ISetInputValue, ISetLoading, IEditValue
}

export {
  setNotes, getNotes, setNewNote, postNotes, setInputValue, setLoading, deleteNote, updateNote, setEditValue
}