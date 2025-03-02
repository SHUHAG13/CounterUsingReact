import React, { useState } from "react";
import Todos from "./Todos";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
                <div className="flex">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter a task..."
                    />
                    <button
                        onClick={addTask}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
                <Todos tasks={tasks} removeTask={removeTask} />
            </div>
        </div>
    );
}
