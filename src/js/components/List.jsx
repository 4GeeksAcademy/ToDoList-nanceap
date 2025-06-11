import React, { useState } from "react";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="todo-container mt-3 shadow">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="form-control border-0 input-task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ul className="list-group">
        {tasks.length === 0 ? (
          <li className="list-group-item text-muted">Add new tasks</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center task-item"
            >
              {task}
              <span className="delete-icon" onClick={() => deleteTask(index)}>✕</span>
            </li>
          ))
        )}
      </ul>

      <div className="footer text-muted px-2 py-1">
        {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
      </div>
    </div>
  );
};

export default List;
