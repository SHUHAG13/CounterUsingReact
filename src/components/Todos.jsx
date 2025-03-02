import React from "react";
import Todo from "./Todo";

export default function Todos({ tasks, removeTask }) {
    return (
        <ul className="mt-4">
            {tasks.map((task, index) => (
                <Todo key={index} task={task} onDelete={() => removeTask(index)} />
            ))}
        </ul>
    );
}
