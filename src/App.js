import React from 'react';
import taskData from './tasklist.json';
import TaskList from './components/Tasklist';
import useTasks from './hooks/useTasks.jsx';
import AddTaskForm from './components/AddTaskForm/index.jsx';
import { v4 } from 'uuid';

function App() {
  const {tasks, changeTaskStatus, addTask, removeTask,changeTaskDifficulty} = useTasks(taskData);

  return (
    <>
      <AddTaskForm
        onNewTask={(title, details, dateTime, difficulty) => {
          const newTask = {
            id: v4(),
            title: title,
            details: details,
            time: dateTime,
            difficulty: difficulty,
            status: "oczekujące",
            onToggleStatus: changeTaskStatus
          };
          addTask(newTask);
        }}
      />
      <TaskList tasks={tasks} onChangeStatus={changeTaskStatus} onRemoveTask={removeTask} onChangeDifficulty={changeTaskDifficulty}/>
    </>
  );
}

export default App;
