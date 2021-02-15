import {
  INotes, ISetNewNote, ISetNotes, SET_NOTES, NEW_NOTE,
  ISetInputValue, SET_INPUT_VALUE, SET_LOADING, ISetLoading, IEditValue, EDIT_VALUE
} from "."

export const setNotes = (notes: INotes[]): ISetNotes => ({ type: SET_NOTES, notes })

export const setNewNote = (note: INotes): ISetNewNote => ({ type: NEW_NOTE, note })

export const setInputValue = (value: string): ISetInputValue => ({ type: SET_INPUT_VALUE, value })

export const setLoading = (isLoad: boolean): ISetLoading => ({ type: SET_LOADING, isLoad })

export const setEditValue = (value: string): IEditValue => ({ type: EDIT_VALUE, value })