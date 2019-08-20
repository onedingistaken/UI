import React, { useState } from "react";
import "./App.css";

function Device({ device, index }) {
  const currentDevice = <span className="currentDevice">THIS DEVICE</span>;
  return (
    <tr className="Device">
      <td className="device-name">
        <span>{device.device}</span>
        {device.currentDevice ? currentDevice : false}
      </td>
      <td className="device-signInTime">{device.signInTime}</td>
      <td>
        <a href="/">Show Details</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="/">Sign out</a>
      </td>
    </tr>
  );
}

function Header() {
  return (
    <div className="Header">
      <h2>Sign in Activity</h2>
      <p>
        View your recent sign ins from the last 30 days. If you see something
        unfamiliar, <a href="/">change your password</a> or{" "}
        <a href="/">sign out of all sessions</a>
      </p>
    </div>
  );
}

function App() {
  const [devices, setDevices] = useState([
    {
      device: "Macbook Pro",
      currentDevice: true,
      signInTime: "Today at 11:12pm EST"
    },
    {
      device: "Galaxy S7",
      currentDevice: false,
      signInTime: "Yesterday at 5:12pm EST"
    },
    {
      device: "iPad",
      currentDevice: false,
      signInTime: "May 8, 2019 at 3:12pm EST"
    }
  ]);
  return (
    <div className="App">
      <Header />
      <table className="Devices">
        <tbody>
          {devices.map((device, index) => (
            <Device key={index} device={device} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
