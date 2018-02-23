import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import Button from './components/Button'
import Result from './components/Result'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  fire = (val) => {
    this.setState({
      count: this.state.count  + val
    })
  }
  render() {
    return (
      <div className="container">
      <div className="jumbotron bg-dark text-white">
        <h1 className="display-4">Sheridan Coding Club</h1>
        <h2>Basic React Intro</h2>
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
      <div className="row">
      <div className="col-sm-6">
      <Button IncVal={1} onClickFunction={this.fire} /><br /><br />
      <Button  IncVal={5}  onClickFunction={this.fire} /><br /><br />
      <Button  IncVal={10} onClickFunction={this.fire} /><br /><br />
      <Button  IncVal={50} onClickFunction={this.fire} />
      </div>

      <div className="col-sm-6">
      <Result counter={this.state.count} />
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default App;
