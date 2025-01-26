import React, { useState } from "react";

const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  const addTaskFunc = (e) => {
    e.preventDefault();
    if (inputTask.trim() === "") return; //Not adding empty tasks to the list
    const newTask = {
      id: Date.now(),
      text: inputTask,
      completed: false,
    };
    setTasks([...tasks, newTask]); // Adding new Task immutably as should be in React
    setInputTask(""); // Clearing input field
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id) => {
    const newTaskText = prompt("Edit your task");
    if (newTaskText) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newTaskText } : task
        )
      );
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1> To-Do List </h1>
      <div className="taskInputs">
        <input
          type="text"
          id="taskAdder"
          value={inputTask}
          onChange={handleInputChange}
          placeholder="Wanna add something?"
          required
          autoFocus
        ></input>
        <button onClick={addTaskFunc} style={{ marginLeft: "10px" }}>
          +Add Task
        </button>
      </div>
      <br />
      <div
        className="tasksListWrapper"
        style={{ height: "80vh", width: "90vw", border: "2px solid blue" }}
      >
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Your Task for today
        </h3>
        <div className="tasksList">
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  marginLeft: "5px",
                }}
              >
                {task.text}
              </span>
              <div className="actionBtns">
                <button
                  onClick={() => {
                    editTask(task.id);
                  }}
                  style={{ marginRight: "5px" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                  style={{ marginRight: "5px" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
