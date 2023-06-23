import React from 'react';
import './TaskList.css';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import {TaskItem} from '../../molecules/TaskItem/TaskItem';

export function TaskList({ tasks, onDeleteTask, onMarkCompleted, onReoderTasks }) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDtragEnd = ({ active, over }) => {
    onReoderTasks({
      fromId: active.id,
      toId: over.id,
    });
  };

  return (
    <ul className="TaskList">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDtragEnd}>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskItem
                key={task.id}
                id={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onMarkCompleted={onMarkCompleted}
              />
            </li>
          ))}
        </SortableContext>
      </DndContext>
    </ul>
  );
}

export default TaskList;
