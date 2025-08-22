import React, { useState } from "react";

function Tracker() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleTask(index) {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <div className="w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl font-sans text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">
          📌 Task Tracker
        </h2>

        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.length === 0 ? (
            <p className="text-gray-400">No tasks yet. Add one!</p>
          ) : (
            tasks.map((t, index) => (
              <li
                key={index}
                onClick={() => toggleTask(index)}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition cursor-pointer"
              >
                <span
                  className={`flex-1 text-left ${
                    t.done
                      ? "line-through text-green-600"
                      : "text-gray-700"
                  }`}
                >
                  {t.text}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    deleteTask(index);
                  }}
                  className="text-red-500 hover:text-red-700 font-medium ml-3"
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Tracker;
