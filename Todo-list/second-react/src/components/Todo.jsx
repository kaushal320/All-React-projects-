import React, { useState } from "react";
import "../styles.css";

const Todo = () => {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState("");

  const handleSubmit = () => {
    settodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });
    setinput("");
  };

  const removeTodo = (id) =>
    settodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todos-list">
        {todos.map((text, id) => {
          return (
            <li className="todo" key={id}>
              <span>{text.text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
