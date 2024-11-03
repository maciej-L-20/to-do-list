import React from "react";
import { useInput } from "../../hooks/useInput";

export default function AddTaskForm ({onNewTask = f => f}) {
    const [titleProps, resetTitle] = useInput("");
    const [detailsProps, resetDetails] = useInput("");
    const [dateProps, resetDate] = useInput("");
    const [timeProps, resetTime] = useInput(""); // Dodaj pole czasu
    const [difficultyProps, resetDifficulty] = useInput(0);

    const submit = event => {
        event.preventDefault();
        // Change date format to "YYYY-MM-DDTHH:MM"
        const dateTime = `${dateProps.value}T${timeProps.value}`;
        onNewTask(titleProps.value, detailsProps.value, dateTime, difficultyProps.value);
        resetTitle();
        resetDetails();
        resetDate();
        resetTime();
        resetDifficulty();
    };

    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="Nazwa zadania" required />
            <input {...detailsProps} type="text" placeholder="Szczegóły" />
            <input {...dateProps} type="date" placeholder="Data wykonania" required />
            <input {...timeProps} type="time" placeholder="Godzina wykonania" required />
            <input {...difficultyProps} type="number" placeholder="Poziom trudności" />
            <button>Dodaj</button>
        </form>
    );
}
