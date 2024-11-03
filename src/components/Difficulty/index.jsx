import React from "react";
import Star from '../Star';
import '../../App.css'

const createArray = length => [...Array(length)];

export default function Difficulty({ totalStars = 10, selectedStars = 0, onRate = f => f }) {
    return (
        <div className="difficulty">
            {createArray(totalStars).map((_, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
        </div>
    );
}
