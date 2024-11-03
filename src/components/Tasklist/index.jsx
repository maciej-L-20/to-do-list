import React from "react";
import Task from "../Task";
import '../../App.css'

export default function TaskList({ tasks = [], onChangeStatus, onRemoveTask, onChangeDifficulty }) {
  if (!tasks.length) return <div class="task" id="emptyTaskList"><h2>Brak zadań</h2></div>;
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onChangeStatus={() => onChangeStatus(task.id)}
          onRemoveTask={()=>onRemoveTask(task.id)}
          onChangeDifficulty={(newDifficulty)=>onChangeDifficulty(task.id,newDifficulty)}
        />
      ))}
    </div>
  );
}