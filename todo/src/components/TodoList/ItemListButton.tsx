import React from 'react'
import { } from '../../redux'


function ItemListButton({ config, id, role, itemAction }: IProps) {
  const onButtonClick = () => {
    itemAction(id)
  }
  let buttonConfig = {
    button: '',
    icon: ''
  }
  switch (config) {
    case 'important':
      buttonConfig = { button: 'btn-outline-success', icon: 'fa-exclamation' }
      break
    case "delete":
      buttonConfig = { button: 'btn-outline-danger', icon: 'fa-trash-o' }
      break
    case "edit":
      buttonConfig = { button: 'btn-outline-secondary', icon: 'fa-pencil-square-o' }
      break
    default:
      buttonConfig
      break
  }

  return (
    <button className={`${buttonConfig.button} btn-sm`} onClick={onButtonClick} role={role}>
      <i className={`fa ${buttonConfig.icon}`} />
    </button>
  )
}

export default ItemListButton

interface IProps {
  config: 'important' | 'delete' | 'edit'
  id?: string
  role: string
  itemAction: (id?: string) => void
}