import React from 'react'
import logo from './logo.svg'
import './App.css'
import Front from './components/Front';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Front />
    
    </div>
  )
}

export default App