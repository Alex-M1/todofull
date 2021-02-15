import React, { ReactNode, useMemo } from 'react'
import { INotes } from '../../redux'
import './AppHeader.scss'

function AppHeader({ appData, t }: IProps) {
  const done = useMemo(() => appData.filter(el => el.done).length, [appData])
  const todo = useMemo(() => appData.length - done, [appData])
  return (
    <div className='app-header d-flex flex-wrap'>
      <h1>Todo List</h1>
      <h2>{todo} {t('more-to-do')}, {done} {t('done')}</h2>
    </div>
  )
}

export default AppHeader

interface IProps {
  appData: INotes[]
  t: (lang: string) => ReactNode
}