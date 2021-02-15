import React from 'react'
import { Provider } from 'react-redux'
import { AppHeader, Footer, ItemAdd, TodoList } from '..'
import { store } from '../../redux'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <div className="todo">
          <AppHeader />
          <TodoList />
          <ItemAdd />
          <Footer />
        </div>
      </div>
    </Provider>
  )
}

export default App