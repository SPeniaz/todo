import React from 'react'
import { TaskItem } from '../../molecules/TaskItem/TaskItem'
import './TaskList.css'

export const TaskList = () => {
  return (
    <div className="TaskList">
        <TaskItem />
        <TaskItem />
        <TaskItem />
    </div>
  )
}
