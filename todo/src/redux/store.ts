import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { app } from './app'
const reducers = combineReducers({
  app
})

const store = createStore(reducers, applyMiddleware(thunk))
export default store

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>