import { useState, useEffect } from "react";

export default function useTasks (initialTasks){
  const [tasks, setTasks] = useState(initialTasks);

  // Changing tasks status
  const changeTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          if (task.status === "oczekujące"){
            return { ...task, status: "wykonane" }
          }
          if (task.status === "wykonane") {
            return { ...task, status: "oczekujące" }
          }
        }
        return task;
      })
    );
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Checking every minute if a task is overdue 
  useEffect(() => {
    const intervalId = setInterval(checkOverdueTasks,60000);
    checkOverdueTasks();
    return () => clearInterval(intervalId);
  }, [tasks]);

  const checkOverdueTasks = () =>
  {
    const now = new Date().getTime();

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        const dueDate = new Date(task.time).getTime();
        console.log('NOW: ' + now);
        console.log(task.title + ': ' + task.time);
        if (task.status === "oczekujące" && dueDate < now) {
          return { ...task, status: "przeterminowane" };
        }
        return task;
      })
    );
  }


  return {tasks, changeTaskStatus, addTask, removeTask};
}
