/* eslint-disable no-useless-constructor */
import React from 'react'
import { Button } from 'react-bootstrap';

class CalculatorButton extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <button onClick={this.props.onClick} className={this.props.className} id={this.props.id}>{this.props.text}</button>
      </>
    )
  }
}

export default CalculatorButton;
