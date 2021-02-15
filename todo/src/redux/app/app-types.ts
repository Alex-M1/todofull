import { ThunkAction } from 'redux-thunk'
import { NEW_NOTE, SET_NOTES, SET_INPUT_VALUE, SET_LOADING, EDIT_VALUE } from '.'
import { AppStateType } from '..'

export interface INotes {
  id: string
  name: string
  important: string
  done: string
}

export interface IState {
  appData: INotes[]
  inputValue: string
  editValue: string
  isLoading: boolean
}

export interface ISetInputValue {
  type: typeof SET_INPUT_VALUE
  value: string
}

export interface ISetNotes {
  type: typeof SET_NOTES
  notes: INotes[]
}

export interface ISetLoading {
  type: typeof SET_LOADING
  isLoad: boolean
}

export interface ISetNewNote {
  type: typeof NEW_NOTE
  note: INotes
}

export interface IEditValue {
  type: typeof EDIT_VALUE,
  value: string
}

export type Actions = ISetNotes | ISetNewNote | ISetInputValue | ISetLoading | IEditValue
export type Thunk = ThunkAction<void, AppStateType, unknown, Actions>