import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  const textDecoration = todo.isComplete ? "line-through" : "";
  return (
    <div className="Todo" style={{ textDecoration: textDecoration }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const SubmitForm = e => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
    // console.log(text);
  };
  return (
    <form onSubmit={SubmitForm}>
      <input
        type="text"
        className="input"
        placeholder="Add a new todo.."
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { text: "todo1", isComplete: false },
    { text: "todo2", isComplete: false },
    { text: "todo3", isComplete: false }
  ]);
  const addTodo = text => {
    const newTodo = { text: text, isComplete: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const updateTodos = [...todos];
    updateTodos[index].isComplete = true;
    setTodos(updateTodos);
  };
  const removeTodo = index => {
    const updateTodos = [...todos];
    updateTodos.splice(index, 1);
    setTodos(updateTodos);
  };
  return (
    <div className="App">
      <div className="todos">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
