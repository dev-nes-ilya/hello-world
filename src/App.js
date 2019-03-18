import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    tasks: "первая задача"
  };

  onChangeInput = evt => {
    const newTask = evt.target.value;
    this.setState({
      tasks: newTask
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>cheklist: {this.state.tasks}</div>
          <input type="text" onChange={this.onChangeInput} />
        </header>
      </div>
    );
  }
}

export default App;
