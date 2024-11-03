import React from "react";

export default function Star({ selected = false, onSelect = f => f }) {
    return (
        <span
            style={{ color: selected ? "red" : "gray", fontSize: "24px", cursor: "pointer" }}
            onClick={onSelect}
        >
            {selected ? "★" : "☆"}
        </span>
    );
}
