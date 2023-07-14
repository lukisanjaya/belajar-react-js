import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting name="Al Hartis" />
        </header>
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    return <h1>Halo {this.props.name}</h1>;
  }
}

export default App;
