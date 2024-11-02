import logo from './logo.svg';
import React from 'react';
import taskData from './tasklist.json';
import TaskList from './components/Tasklist';
import useTasks from './hooks/useTasks.jsx';

function App() {
  // Wywołanie custom hooka useTasks
  const { tasks, toggleTaskStatus } = useTasks(taskData);

  return (
    <div>
      <TaskList tasks={tasks} onToggleStatus={toggleTaskStatus} />
    </div>
  );
}

export default App;