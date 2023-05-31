import React from 'react'
import { TaskInput } from '../../atoms/TaskInput/TaskInput'
import './Header.css'

export const Header = () => {
  return (
    <div className="Header">
        <h1>TO DO</h1>
        <TaskInput />
    </div>
  )
}
