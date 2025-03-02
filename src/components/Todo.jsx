import React from "react";

export default function Todo({ task, onDelete }) {
    return (
        <li className="flex justify-between items-center bg-gray-200 p-2 mt-2 rounded">
            {task}
            <button
                onClick={onDelete}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
                Delete
            </button>
        </li>
    );
}
