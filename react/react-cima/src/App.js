import React, { useState } from "react";
import "./App.css";

function Device({ device, index, toggleCurrentDevice }) {
  const currentDevice = <span className="currentDevice">THIS DEVICE</span>;
  const details = (
    <ul className="details">
      {Object.keys(device.details).map((k, index) => (
        <li key={index}>
          <span>{k}</span>
          <span>{device.details[k]}</span>
          <span />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="Device">
      <li className="device__simple" onClick={() => toggleCurrentDevice(index)}>
        <span className="device__title">
          <span className="device__device">{device.device}</span>
          {device.currentDevice ? currentDevice : false}
        </span>
        <span className="device__signInTime">{device.signInTime}</span>
        <span className="device__buttons">
          <a href="/">
            {device.currentDevice ? "Hide Details" : "Show Details"}
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/">Sign out</a>
        </span>
      </li>
      {device.currentDevice ? details : false}
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <h3>Sign in Activity</h3>
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
      currentDevice: false,
      signInTime: "Today at 11:12pm EST",
      details: {
        Browser: "Chrome",
        Location: "United States",
        "IP address": "fc:c3:de:a3:e3:83"
      }
    },
    {
      device: "Galaxy S7",
      currentDevice: false,
      signInTime: "Yesterday at 5:12pm EST",
      details: {
        Browser: "Firefox",
        Location: "United States",
        "IP address": "fc:c3:de:a3:e3:83"
      }
    },
    {
      device: "iPad",
      currentDevice: false,
      signInTime: "May 8, 2019 at 3:12pm EST",
      details: {
        Browser: "Safari",
        Location: "United States",
        "IP address": "fc:c3:de:a3:e3:83"
      }
    },
    {
      device: "iPhone X",
      currentDevice: false,
      signInTime: "May 7, 2019 at 3:12pm EST",
      details: {
        Browser: "Safari",
        Location: "United States",
        "IP address": "fc:c3:de:a3:e3:83"
      }
    },
    {
      device: "iMac",
      currentDevice: false,
      signInTime: "May 6, 2019 at 3:12pm EST",
      details: {
        Browser: "Safari",
        Location: "United States",
        "IP address": "fc:c3:de:a3:e3:83"
      }
    },
    {
      device: "Chrome-Windows",
      currentDevice: false,
      signInTime: "May 5, 2019 at 3:12pm EST",
      details: {
        Browser: "Safari",
        Location: "United States",
        "IP address": "fc:c3:de:a3:e3:83"
      }
    }
  ]);
  const toggleCurrentDevice = index => {
    const updateDevices = [...devices];
    // console.log(index);
    updateDevices[index].currentDevice = !updateDevices[index].currentDevice;
    setDevices(updateDevices);
  };
  return (
    <div className="App">
      <Header />
      <ul className="Devices">
        {devices.map((device, index) => (
          <Device
            key={index}
            device={device}
            index={index}
            toggleCurrentDevice={toggleCurrentDevice}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
