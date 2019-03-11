import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    tasks: 'первая задача'
  };
  

  onChangeInput = (evt) => {
    const newTask = evt.target.value;
    this.setState({
    tasks: newTask
   })
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a> */}
          <tasks>
            cheklist: {this.state.tasks}
          </tasks>
          <input type="text" onChange={this.onChangeInput}></input>
          {/* <button onClick={this.onClickButton}>add</button> */}
        </header>
        
      </div>
    );
  }
}

export default App;
