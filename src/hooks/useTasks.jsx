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

  useEffect(() => {
    const now = new Date().getTime(); // Aktualny czas w milisekundach

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        const dueDate = new Date(task.time).getTime(); // Czas zadania w milisekundach

        // Sprawdzenie, czy zadanie jest przeterminowane, z uwzględnieniem dokładnego czasu
        if (task.status === "oczekujące" && dueDate < now) {
          return { ...task, status: "przeterminowane" };
        }
        return task;
      })
    );
  }, []);

  return { tasks, toggleTaskStatus };
}
