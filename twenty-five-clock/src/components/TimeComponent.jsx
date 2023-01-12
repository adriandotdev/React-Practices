/* eslint-disable no-useless-constructor */
import React from 'react'
import Label from './Label';
import { ButtonGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class TimeComponent extends React.Component {

  constructor(props) {
    super(props);
  }
  
  /**
   * 
   * PROPS
   * 
   * labelID : id
   * timeValueID : id
   * decrementID: id
   * incrementID : id
   */
  render() {
    return (
      <div className='p-5 bg-dark border my-2'>
        <Label id={this.props.labelID} text={this.props.text}/>
        <p id={this.props.timeValueID} className="text-white fw-bold display-4">{this.props.timeValue}</p>
        <ButtonGroup>
            <button onClick={() => this.props.decrement()} id={this.props.decrementID} className='btn btn-outline-danger fw-bold'>-</button>
            <button onClick={() => this.props.increment()} id={this.props.incrementID} className='btn btn-outline-primary fw-bold'>+</button>
        </ButtonGroup>
        
      </div>
    )
  }
}

export default TimeComponent;