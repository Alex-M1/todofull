import React, { SyntheticEvent, useMemo } from 'react'

function LangButton({ value, title, language, clickHandler }: IProps) {
  const border = useMemo(() => {
    return language === value ? '1px solid black' : ''
  }, [language])

  return <button
    value={value}
    className='btn btn-outline'
    onClick={clickHandler}
    style={{ borderBottom: border }}
  >{title}</button>
}

export default LangButton

interface IProps {
  value: string
  title: string
  language: string
  clickHandler: (e: SyntheticEvent<HTMLButtonElement>) => void
}