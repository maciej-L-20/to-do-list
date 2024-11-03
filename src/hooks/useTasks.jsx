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
    // Uruchamiamy co 5 minut (300000 ms)
    const intervalId = setInterval(checkOverdueTasks,60000);
  
    // Pierwsze wywołanie przy montowaniu komponentu
    checkOverdueTasks();
  
    // Czyszczenie interwału przy odmontowaniu komponentu
    return () => clearInterval(intervalId);
  }, []);

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


  return { tasks, toggleTaskStatus, addTask };
}
