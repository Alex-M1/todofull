import { getNotes, postNotes, deleteNote, updateNote } from './app-thunks'
import { setNotes, setNewNote, setInputValue, setLoading, setEditValue } from './app-actions'
import { INotes, ISetNewNote, ISetNotes, IState, ISetInputValue, ISetLoading, IEditValue, Actions, Thunk } from './app-types'
import { SET_NOTES, NEW_NOTE, SET_INPUT_VALUE, SET_LOADING, EDIT_VALUE } from './constants'
import app from './app-reducer'
export {
  SET_NOTES, NEW_NOTE, SET_INPUT_VALUE, SET_LOADING, EDIT_VALUE
}

export {
  INotes, IState, ISetNotes, ISetNewNote, ISetInputValue, ISetLoading, IEditValue, Actions, Thunk
}

export {
  setNotes, getNotes, app, setNewNote, postNotes, setInputValue, setLoading, deleteNote, updateNote, setEditValue
}