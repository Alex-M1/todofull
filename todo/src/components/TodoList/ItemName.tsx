import React, { SyntheticEvent } from 'react'

function ItemName({ style, name, editValue, onLabelClick, onBlurInput, editInput }: IProps) {
  return (
    <form onSubmit={onBlurInput}>
      <input
        type="text"
        style={{ display: style.input }}
        value={editValue}
        onInput={editInput} onBlur={onBlurInput} />
      <span
        className='todo-list-item-label'
        onClick={onLabelClick}
        style={{ display: style.span }}
      >
        {name}
      </span>
    </form>
  )
}

export default ItemName

interface IProps {
  name: string
  style: IStyle
  editValue: string
  onLabelClick: () => void
  onBlurInput: () => void
  editInput: (e: SyntheticEvent<HTMLInputElement>) => void
}
interface IStyle {
  input: string
  span: string
}