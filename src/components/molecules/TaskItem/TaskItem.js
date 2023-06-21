import React from "react";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from "@dnd-kit/utilities"
import { Task } from "../../atoms/Task/Task";
import { TaskDeleteBtn } from "../../atoms/TaskDeleteBtn/TaskDeleteBtn";
import "./TaskItem.css";

import {CheckBox} from "../../atoms/CheckBox/CheckBox";

export function TaskItem({ task, onDeleteTask, onMarkCompleted, ...props }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="TaskItem" style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <CheckBox
        checked={task.completed}
        onChange={(checked) => onMarkCompleted({ id: task.id, completed: checked })}
      />
      <Task description={task.description} completed={task.completed}/>
      <TaskDeleteBtn onDeleteClick={onDeleteTask} taskId={task.id} />
    </div>
  );
}

export default TaskItem;
