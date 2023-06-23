import React from "react";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from "@dnd-kit/utilities"
import { Button } from "../../atoms/Button/Button";
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
        label={task.description}
        onChange={(checked) => onMarkCompleted({ id: task.id, completed: checked })}
      />
      <Button onClick={onDeleteTask} id={task.id} btnText='✖'/>
    </div>
  );
}

export default TaskItem;
