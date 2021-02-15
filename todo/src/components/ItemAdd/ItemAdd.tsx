import React, { SyntheticEvent } from 'react'
import { ISetInputValue } from '../../redux'
import './ItemAdd.scss'

function ItemAdd({ inputValue, isLoad, t, postNotes, setInputValue }: IProps) {
  const inputChanged = (e: SyntheticEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const setDatatoServer = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (inputValue) {
        postNotes(inputValue)
      }
    } catch (e) { console.log(e) }
  }

  return (
    <form className='add-form' onSubmit={setDatatoServer} >
      <input type='text'
        role='add-input'
        className='form-control'
        onChange={inputChanged}
        value={inputValue}
        placeholder={t('writeName')} />
      <button role='add-btn' className='btn btn-outline-primary' disabled={isLoad}>{t("add-todo")}</button>
    </form>
  )
}

export default ItemAdd

interface IProps {
  inputValue: string
  isLoad: boolean
  t: (lang: string) => string
  postNotes: (name: string) => void
  setInputValue: (value: string) => ISetInputValue
}