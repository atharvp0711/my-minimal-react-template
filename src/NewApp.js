// devCommunity soln

import React, { useState } from "react";

const NewApp = () => {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([]);

  const addTask = () => {
    if (text) {
      setToDos([...toDos, { text, completed: false }]);
      setText("");
    }
  };

  const toggleToDo = (index) => {
    const newToDos = [...toDos];
    newToDos[index].completed = !newToDos[index].completed;
    setToDos(newToDos);
  };

  const deleteToDo = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a to-do"
      />
      <button onClick={addTask}> +Add </button>
      <ul>
        {toDos.map((toDo, index) => (
          <li
            key={index}
            style={{ textDecoration: toDo.completed ? "line-through" : "none" }}
          >
            {toDo.text}
            <button onClick={() => toggleToDo(index)}> Toggle </button>
            <button onClick={() => deleteToDo(index)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewApp;
