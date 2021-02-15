import React, { SyntheticEvent } from 'react'
import './Footer.scss'
import LangButton from './LangButton'

function Footer({ i18n }: IProps) {
  const langChange = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let language = e.currentTarget.value
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }
  return (
    <div className='lang-btns'>
      <LangButton value='en' title='English' language={i18n.language} clickHandler={langChange} />
      <LangButton value='uk' title='Українська' language={i18n.language} clickHandler={langChange} />
      <LangButton value='ru' title='Русский' language={i18n.language} clickHandler={langChange} />
    </div>
  )
}

export default Footer

interface IProps {
  i18n: {
    changeLanguage: (lang: string) => any
    language: string
  }
}