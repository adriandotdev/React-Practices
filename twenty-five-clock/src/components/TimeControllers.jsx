/* eslint-disable no-useless-constructor */
import React from 'react';
import TimeComponent from './TimeComponent';
import {Container, Row, Col} from 'react-bootstrap'

class TimeControllers extends React.Component {

  constructor(props) {
    super(props);
  }
  

  
  render() {
    return (
        <Row className="row-cols-1 row-cols-md-2">
            <Col>
                <TimeComponent
                    labelID="break-label"
                    decrementID="break-decrement"
                    incrementID="break-increment"
                    timeValueID="break-length"
                    timeValue={this.props.state.breakLength}
                    increment={this.props.incBL} 
                    decrement={this.props.decBL}
                    text="Break Length"/>
            </Col>
            <Col>
                <TimeComponent 
                    labelID="session-label"
                    decrementID="session-decrement"
                    incrementID="session-increment"
                    timeValueID="session-length"
                    timeValue={this.props.state.sessionLength}
                    increment={this.props.incSL} 
                    decrement={this.props.decSL}
                    text="Session Length"/>
            </Col>
        </Row>
    )
  }
}

export default TimeControllers;