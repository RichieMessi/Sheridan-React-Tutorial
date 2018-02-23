import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props){
    super(props)
  }

  increaseValue = () => {
    this.props.onClickFunction(this.props.IncVal)
  }

  render(){
    return(
      <button onClick={this.increaseValue} className="btn btn-info"> + {this.props.IncVal}</button>
    )
  }
}
