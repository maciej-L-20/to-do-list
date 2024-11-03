import { useState, useEffect } from "react";

export default function useTasks(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id && task.status === "oczekujące") {
          return { ...task, status: "wykonane" };
        }
        return task;
      })
    );
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    const now = new Date().getTime();

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        const dueDate = new Date(task.time).getTime();
        console.log('NOW: ' + task.time);
        console.log(task.title + ': ' + task.time);
        if (task.status === "oczekujące" && dueDate < now) {
          return { ...task, status: "przeterminowane" };
        }
        return task;
      })
    );
  }, []);

  return { tasks, toggleTaskStatus, addTask };
}
