import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    outputs: [
      {userName : 'Larry'},
      {userName : 'Terry'}
    ]
  }

  switchNameHandler = () => {
    this.setState( {
      outputs: [
        {userName : 'Gary'},
        {userName : 'Harry'}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      outputs: [
        {userName : event.target.value},
        {userName : event.target.value}
      ]
    } )
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '16px',
      width: "50%"
    };

    return (
      <div className="App">
        <UserInput style = {style} changed = {this.nameChangedHandler} userName = {this.state.outputs[1].userName}/>
        <UserInput style = {style} changed = {this.nameChangedHandler} userName = {this.state.outputs[0].userName}/>
        <UserOutput userName ={this.state.outputs[1].userName}
        click = {this.switchNameHandler}/>
        <UserOutput userName = {this.state.outputs[0].userName}/>
      </div>
    );
  }
}

export default App;
