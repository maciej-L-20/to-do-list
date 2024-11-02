import React from "react";
import Task from "../Task";

export default function TaskList({ tasks = [], onToggleStatus }) {
  if (!tasks.length) return <div>Brak zadań.</div>;
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onToggleStatus={() => onToggleStatus(task.id)}
        />
      ))}
    </div>
  );
}