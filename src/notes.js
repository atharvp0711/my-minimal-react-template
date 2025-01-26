import React, { useState } from "react"; 

const App = () => {
  const [text, setText] = useState("");
  const [addedTask, setAddedTask] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const addTaskFunc = (e) => {
    e.preventDefault();
    setText("");
    setAddedTask(
      addedTask.push(e.target.value);
    );
  };

  return (
    <div>
      <h1> To-Do List </h1>
      <div className="taskInputs">
        <input
        type="text"
          id="taskAdder"
          value={text}
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
      >
        <h3 >
          Your To Do List
        </h3>
        <div
          className="tasksList"
          
        >
          <input type="radio"> </input>
          <div> {addedTask} </div>
          <div>
            <> "Edit" </>
            <> "Delete" </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;