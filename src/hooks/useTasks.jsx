import { useState, useEffect } from "react";

export default function useTasks(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);

  const changeTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          if (task.status === "oczekujące") {
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
    const intervalId = setInterval(checkOverdueTasks, 60000);
    checkOverdueTasks();
    return () => clearInterval(intervalId);
  }, [tasks]);

  const checkOverdueTasks = () => {
    const now = new Date().getTime();

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        const dueDate = new Date(task.time).getTime();
        if (task.status === "oczekujące" && dueDate < now) {
          return { ...task, status: "przeterminowane" };
        }
        return task;
      })
    );
  }
  const changeTaskDifficulty = (id, newDifficulty) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, difficulty: newDifficulty } : task
      )
    );
  };


  return { tasks, changeTaskStatus, addTask, removeTask, changeTaskDifficulty };
}
