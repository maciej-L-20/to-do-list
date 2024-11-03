import React from "react";
import Difficulty from "../Difficulty";
import '../../App.css';


export default function Task({ title, details, time, difficulty, status, onChangeStatus, onRemoveTask, onChangeDifficulty }) {
  // Date and time connection and formatting
  const formattedTime = time ? new Date(time).toLocaleString("pl-PL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }) : "Brak daty";

  return (
    <section class="task">
      <h2>{title}</h2>
      <p>{details}</p>
      <Difficulty totalStars={10} selectedStars={difficulty} onRate={onChangeDifficulty} />
      <p>Termin: {formattedTime}</p>
      <p>Status: {status}</p>

      {status === "oczekujące" && (
        <button onClick={onChangeStatus} id="doneButton">Oznacz jako wykonane</button>
      )}
      {(status === "wykonane") && (
        <>
          <button onClick={onChangeStatus} id="undoneButton">Oznacz jako niewykonane</button>
          <button onClick={onRemoveTask} id="removeButton">Usuń zadanie</button>
        </>
      )}
      {(status === "przeterminowane") && (
        <>
          <button onClick={onRemoveTask} id="removeButton">Usuń zadanie</button>
        </>
      )}
    </section>
  );
}
