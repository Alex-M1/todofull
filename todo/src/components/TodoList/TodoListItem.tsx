import React, { SyntheticEvent, useState } from 'react'
import { IEditValue } from '../../redux'
import ItemListButton from './ItemListButton'
import ItemName from './ItemName'

function TodoListItem(props: IProps) {
  const {
    name, id, important, done, editValue, deleteNote, updateNote, setEditValue
  } = props

  const [style, setStyle] = useState({ span: 'inline-block', input: 'none' })

  const onEditClick = () => {
    setStyle({ span: 'none', input: 'inline-block' })
    setEditValue(name)
  }

  const onLabelClick = () => updateNote(id, 'done')

  const setImportant = () => updateNote(id, 'important')

  const onBlurInput = () => {
    setStyle({ span: 'inline-block', input: 'none' })
    updateNote(id, editValue)
  }

  const editInput = (e: SyntheticEvent<HTMLInputElement>) => setEditValue(e.currentTarget.value)

  const itemNameProps = {
    onLabelClick, onBlurInput, editInput, style, name, editValue
  }


  return (
    <li className={`todo-list-item list-group-item ${done} ${important}`} >
      <ItemName {...itemNameProps} />
      <span className='todo-list-item-buttons'>
        <ItemListButton config='edit' role='edit' itemAction={onEditClick} />
        <ItemListButton config='important' role='important' id={id} itemAction={setImportant} />
        <ItemListButton config='delete' role='delete' id={id} itemAction={deleteNote} />
      </span>
    </li>
  )
}

export default TodoListItem

interface IProps {
  name: string
  important: string
  id: string
  done: string
  editValue: string
  deleteNote: (id: string) => void
  updateNote: (id: string, trigger: string) => void
  setEditValue: (value: string) => IEditValue
}