import React from "react";
import Task from "../Task";

export default function TaskList({ tasks = [], onChangeStatus, onRemoveTask }) {
  if (!tasks.length) return <div>Brak zadań.</div>;
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onChangeStatus={() => onChangeStatus(task.id)}
          onRemoveTask={()=>onRemoveTask(task.id)}
        />
      ))}
    </div>
  );
}