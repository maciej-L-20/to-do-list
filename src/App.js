import React from 'react';
import taskData from './tasklist.json';
import TaskList from './components/Tasklist';
import useTasks from './hooks/useTasks.jsx';
import AddTaskForm from './components/AddTaskForm/index.jsx';
import { v4 } from 'uuid';

function App() {
  const { tasks, toggleTaskStatus, addTask } = useTasks(taskData);

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
            onToggleStatus: toggleTaskStatus
          };
          addTask(newTask);
        }}
      />
      <TaskList tasks={tasks} onToggleStatus={toggleTaskStatus} />
    </>
  );
}

export default App;
