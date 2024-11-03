import React from 'react';
import taskData from './tasklist.json';
import TaskList from './components/Tasklist';
import useTasks from './hooks/useTasks.jsx';
import AddTaskForm from './components/AddTaskForm/index.jsx';
import { v4 } from 'uuid';
import './App.css';

function App() {
  const {tasks, changeTaskStatus, addTask, removeTask, changeTaskDifficulty} = useTasks(taskData);

  return (
    <>
    <h1 id="appTitle">To-Do-List</h1>
      <AddTaskForm
        onNewTask={(title, details, dateTime, difficulty) => {
          const newTask = {
            id: v4(),
            title: title,
            details: details,
            time: dateTime,
            difficulty: difficulty,
            status: "oczekujące"
          };
          addTask(newTask);
        }}
      />
      <TaskList tasks={tasks} onChangeStatus={changeTaskStatus} onRemoveTask={removeTask} onChangeDifficulty={changeTaskDifficulty}/>
    </>
  );
}

export default App;
