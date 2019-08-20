import React, { useState } from "react";
import "./App.css";

function setChar()

function App() {
  const [char, setChar] = useState([{ index: 1 }]);

  return <div className="App">{char[0].index}</div>;
}

export default App;
