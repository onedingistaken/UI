import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Card from './components/Card';
import Coordinates from './components/Coordinate';
import Users from './components/Users';
import { Route, Switch } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <h4># Router</h4>
      {/* <Users /> */}
      <Switch>
      <Route path='/:userId' component={Details} exact={true} />
        <Route path='/' component={Users} />
      </Switch>

      <hr />
      <h4># Dropdown Menu</h4>
      <Card />

      <hr />
      <h4># onMouseMove</h4>
      <Coordinates />

      <hr />
      <h4># Counter</h4>
      <Counter />
    </div>
  );
}

export default App;
