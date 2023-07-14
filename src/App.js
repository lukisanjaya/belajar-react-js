import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";

function App() {
  const [color, setColor] = useState("BLUE");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Al Hartis" />
        Color : {color}
        <button onClick={() => setColor("RED")}>KLIK</button>
      </header>
    </div>
  );
}

class Greeting extends Component {
  render() {
    return <h1>Halo {this.props.name}</h1>;
  }
}

export default App;
