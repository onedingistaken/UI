import React, { useState } from "react";
import "./SimpleTodoList.css";

function TodoForm({ addNewTodo }) {
  const [text, setText] = useState("");
  const submitInput = e => {
    e.preventDefault();
    if (!text) return;
    addNewTodo(text);
    // console.log(text);
    setText("");
  };
  return (
    <form onSubmit={submitInput}>
      <input
        className="TodoForm"
        type="text"
        placeholder="Add a new todo.."
        onChange={e => setText(e.target.value)}
        value={text}
      />
    </form>
  );
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="Todo">
      <span
        className="todo__text"
        style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
      >
        {todo.text}
      </span>
      <span className="buttons">
        <button className="todo__complete" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button className="todo__remove" onClick={() => removeTodo(index)}>
          X
        </button>
      </span>
    </div>
  );
}

function SimpleTodoList() {
  const [todos, setTodos] = useState([
    { text: "todo1", isComplete: false },
    { text: "todo2", isComplete: false },
    { text: "todo3", isComplete: false }
  ]);
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
  const addNewTodo = text => {
    const newTodo = { text: text, isComplete: false };
    const updateTodos = [...todos, newTodo];
    setTodos(updateTodos);
  };
  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addNewTodo={addNewTodo} />
      </div>
    </div>
  );
}

export default SimpleTodoList;
