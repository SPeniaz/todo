import React from "react";
import { Task } from "../../atoms/Task/Task";
import { TaskCompletedCheckBox } from "../../atoms/TaskCompletedCheckBox/TaskCompletedCheckBox";
import { TaskDeleteBtn } from "../../atoms/TaskDeleteBtn/TaskDeleteBtn";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import "./TaskItem.css";

export const TaskItem = ({ task, onDeleteTask, onMarkCompleted, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="TaskItem" style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <TaskCompletedCheckBox
        checked={task.completed}
        onCheck={(checked) => onMarkCompleted({ id: task.id, completed: checked })}
      />
      <Task description={task.description} completed={task.completed}/>
      <TaskDeleteBtn onDeleteClick={onDeleteTask} taskId={task.id} />
    </div>
  );
};
