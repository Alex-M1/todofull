import { setNotes, setLoading } from '.'
import { API } from './../../axios/api'
import { INotes, Thunk } from './app-types'

export const getNotes = (): Thunk => (dispatch) => {
  dispatch(setLoading(true))
  API.getNotes()
    .then(data => {
      dispatch(setNotes(data))
      dispatch(setLoading(false))
    })
}

export const postNotes = (name: string): Thunk => (dispatch) => {
  dispatch(setLoading(true))
  API.postNotes(name).then(data => {
    dispatch(setNotes(data))
    dispatch(setLoading(false))
  })
}

export const deleteNote = (id: string): Thunk => (dispatch) => {
  dispatch(setLoading(true))
  API.deleteNote(id).then(data => {
    dispatch(setNotes(data))
    dispatch(setLoading(false))
  })
}

export const updateNote = (id: string, trigger: string): Thunk => async (dispatch) => {
  dispatch(setLoading(true))
  const getNote: INotes = await API.getNote(id)

  switch (trigger) {
    case ('important'):
      return API.updateNote(id, { ...getNote[0], important: getNote[0].important ? '' : 'important' })
        .then(data => {
          dispatch(setNotes(data))
          dispatch(setLoading(false))
        })
    case ('done'):
      return API.updateNote(id, { ...getNote[0], done: getNote[0].done ? '' : 'done' })
        .then(data => {
          dispatch(setNotes(data))
          dispatch(setLoading(false))
        })
    default: return API.updateNote(id, { ...getNote[0], name: trigger })
      .then(data => {
        dispatch(setNotes(data))
        dispatch(setLoading(false))
      })
  }
}
