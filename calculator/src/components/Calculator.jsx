/* eslint-disable no-useless-constructor */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import CalculatorButton  from './CalculatorButton';

class Calculator extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

        expressionDisplay: '',
        inputDisplay: '0'
    }

    this.handleInput = this.handleInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleInput(value) {

    const DIGIT = /\d/;

    this.setState(state => ({
        expressionDisplay: state.expressionDisplay + value, inputDisplay: value.match(DIGIT) ? state.inputDisplay + value : value
    }));
  }

  clearInput() {
    this.setState({expressionDisplay: '', inputDisplay: ''});
  }

  render() {
    return (
      <Container style={{minHeight: '100vh'}} className="bg-success d-flex flex-column justify-content-center align-items-center">
        <div className="w-25 ">
            <h1 className="text-center my-4 display-5 w-100">Calculator App</h1>
            <Container className="bg-info">
                <Row className="flex-column">
                    <Col className="mx-0 px-0">
                        <div id="display-box" className="bg-dark w-100 d-flex flex-column justify-content-start">
                            <p className="text-white text-end px-1 my-0 p-2">{this.state.expressionDisplay}</p>
                            <p id="display" className="text-white text-end px-1 fw-bold display-6 my-0">{this.state.inputDisplay}</p>
                        </div>
                    </Col>
                    <Col className="px-0 mx-0 justify-self-start">
                        <div className="buttons">
                            <CalculatorButton text="AC" id="clear" className="btn-calc"/>
                            <CalculatorButton text="/" id="divide" className="btn-calc"/>
                            <CalculatorButton text="X" id="multiply" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("7")} text="7" id="seven" className="btn-calc"/>
                            <CalculatorButton text="8" id="eight" className="btn-calc"/>
                            <CalculatorButton text="9" id="nine" className="btn-calc"/>
                            <CalculatorButton text="-" id="subtract" className="btn-calc"/>
                            <CalculatorButton text="4" id="four" className="btn-calc"/>
                            <CalculatorButton text="5" id="five" className="btn-calc"/>
                            <CalculatorButton text="6" id="six" className="btn-calc"/>
                            <CalculatorButton text="+" id="add" className="btn-calc"/>
                            <CalculatorButton text="1" id="one" className="btn-calc"/>
                            <CalculatorButton text="2" id="two" className="btn-calc"/>
                            <CalculatorButton text="1" id="three" className="btn-calc"/>
                            <CalculatorButton text="0" id="zero" className="btn-calc"/>
                            <CalculatorButton text="." id="decimal" className="btn-calc"/>
                            <CalculatorButton text="=" id="equals" className="btn-calc"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
      </Container>
    )
  }
}

export default Calculator;