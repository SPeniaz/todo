import React from 'react'
import './Task.css'

export const Task = ({description}) => {
  return (
    <div className="Task">{description}</div>
  )
}
