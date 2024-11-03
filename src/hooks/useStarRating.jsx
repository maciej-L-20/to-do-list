import { useState } from "react";

//hook for handling difficulty update
export const useStarRating = (initialDifficulty = 0) => {
    const [difficulty, setDifficulty] = useState(initialDifficulty);

    const resetDifficulty = () => setDifficulty(initialDifficulty);

    return {
        difficulty,
        setDifficulty,
        resetDifficulty,
    };
};
