import React from "react";

export default function Star({ selected = false }) {
    return (
        <span style={{ color: selected ? "red" : "gray", fontSize: "24px" }}>
            {selected ? "★" : "☆"}
        </span>
    );
}
