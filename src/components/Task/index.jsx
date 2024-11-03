import React from "react";
import Difficulty from "../Difficulty";

export default function Task({ title, details, time, difficulty, status, onChangeStatus, onRemoveTask }) {
  // Date and time connection and formatting
  const formattedTime = time ? new Date(time).toLocaleString("pl-PL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }) : "Brak daty";

  return (
    <section style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h1>{title}</h1>
      <p>{details}</p>
      <Difficulty totalStars={10} selectedStars={difficulty} />
      <p>Termin: {formattedTime}</p>
      <p>Status: {status}</p>

      {status === "oczekujące" && (
          <button onClick={onChangeStatus}>Oznacz jako wykonane</button>
      )}
      {(status === "wykonane") && (
        <>
          <button onClick={onChangeStatus}>Oznacz jako niewykonane</button>
          <button onClick={onRemoveTask}>Usuń zadanie</button>
        </>
      )}
      {(status === "przeterminowane") && (
        <>
          <button onClick={onRemoveTask}>Usuń zadanie</button>
        </>
      )}
    </section>
  );
}
