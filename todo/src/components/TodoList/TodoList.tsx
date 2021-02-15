import React, { useEffect } from 'react'
import { IEditValue, INotes } from '../../redux'
import './TodoList.scss'
import TodoListItem from './TodoListItem'

function TodoList(props: IProps) {
  const { notes, getNotes, ...funcs } = props
  const listItem = notes.map((data) => <TodoListItem {...data}{...funcs} key={data.id} />)
  useEffect(() => {
    getNotes()
  }, [])

  return (
    <ul className="todo-list list-group">
      {listItem}
    </ul>
  )
}

export default TodoList

interface IProps {
  notes: INotes[]
  editValue: string
  getNotes: () => void
  deleteNote: (id: string) => void
  updateNote: (id: string, trigger: string) => void
  setEditValue: (value: string) => IEditValue
}