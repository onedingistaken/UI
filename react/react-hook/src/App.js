import React, { useState, useEffect } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  // effect hook
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(document.title);
  });

  return (
    <div className="Counter">
      <p>
        You clicked <span>{count}</span> times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function App() {
  console.log(document.title);
  return (
    <div className="App">
      <div className="header">Hello App</div>
      <Counter />{" "}
    </div>
  );
}

export default App;
