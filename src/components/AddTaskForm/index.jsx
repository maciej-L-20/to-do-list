import React from "react";
import { useInput } from "../../hooks/useInput";
import { useStarRating } from "../../hooks/useStarRating";
import Difficulty from "../Difficulty";

export default function AddTaskForm({ onNewTask = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [detailsProps, resetDetails] = useInput("");
    const [dateProps, resetDate] = useInput("");
    const [timeProps, resetTime] = useInput("");
    const { difficulty, setDifficulty, resetDifficulty } = useStarRating(0);

    const submit = (event) => {
        event.preventDefault();
        //time formating
        const dateTime = `${dateProps.value}T${timeProps.value}`;
        onNewTask(titleProps.value, detailsProps.value, dateTime, difficulty);
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
            <input {...dateProps} type="date" required />
            <input {...timeProps} type="time" required />
            <Difficulty
                totalStars={10}
                selectedStars={difficulty}
                onRate={setDifficulty}
            />
            <button>Dodaj</button>
        </form>
    );
}
