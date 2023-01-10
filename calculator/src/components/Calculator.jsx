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
        inputDisplay: '0',
        hasDecimalPoint: false,
        hasExpression : false
    }

    this.handleInput = this.handleInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.changeLastOperator = this.changeLastOperator.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }

  componentDidMount() {

    document.title = "Calculator App | adriandotdev"
  }

  handleInput(value) {

    const DIGIT = /\d/;
    const OPERATOR = /[+*/-]/;

    this.setState(state => ({

        expressionDisplay: String(state.expressionDisplay).length > 2 && String(state.expressionDisplay[state.expressionDisplay.length - 1]).match(OPERATOR) && value.match(OPERATOR) ? state.expressionDisplay.slice(0, state.expressionDisplay.length - 2) + value :
        
        String(state.expressionDisplay[state.expressionDisplay.length - 1]).match(OPERATOR) && value.match(OPERATOR) && value !== '-' ? state.expressionDisplay.slice(0, state.expressionDisplay.length - 1) + value : state.expressionDisplay + value,
        /**
         * 
         * IF wala pang decimal, ang inputdisplay ay 0 and value ng current input ay '.' => append
         * IF wala pang decimal at digit ang current display and value ng current input ay '.' => append
         */
        inputDisplay: !state.hasDecimalPoint && state.inputDisplay === '0' && value === '.' ? '0.' :
        !state.hasDecimalPoint && String(state.inputDisplay).match(DIGIT) && value === '.' ? state.inputDisplay + value : state.hasDecimalPoint && value === '.' ? state.inputDisplay : value.match(DIGIT) && state.inputDisplay !== '0' && !String(state.inputDisplay).match(OPERATOR) ? state.inputDisplay + value : value
    }));

    if (value === '.') {
        this.setState({hasDecimalPoint: true});
    }
  }

  changeLastOperator(value, newReplace) {

    return String(value).slice(0, value.length - 1) + newReplace;
  }
  clearInput() {
    this.setState({expressionDisplay: '', inputDisplay: '0', hasDecimalPoint: false});
  }

  calculateResult() {

    let result = eval(this.state.expressionDisplay);


    this.setState(state => ({

        expressionDisplay: state.expressionDisplay + "=" + String(result).indexOf('.') !== -1 ? parseFloat(result.toFixed(4)) : result,
        inputDisplay: eval(state.expressionDisplay)
    }))
  }
  render() {
    return (
      <Container style={{minHeight: '100vh'}} className="d-flex flex-column justify-content-center align-items-center">
        <div className="">
            <h1 className="text-center my-4 display-5 w-100 fw-bold">Calculator App</h1>
            <Container className="bg-info">
                <Row className="flex-column">
                    <Col className="mx-0 px-0">
                        <div id="display-box" className="bg-dark w-100 d-flex flex-column justify-content-start">
                            <p id="expression-display" className="text-white text-end px-1 my-0 p-2">{this.state.expressionDisplay}</p>
                            <p id="display" className="text-white text-end px-1 fw-bold display-6 my-0">{this.state.inputDisplay}</p>
                        </div>
                    </Col>
                    <Col className="px-0 mx-0 justify-self-start">
                        <div className="buttons">
                            <CalculatorButton onClick={this.clearInput} text="AC" id="clear" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("/")} text="/" id="divide" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("*")} text="X" id="multiply" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("7")} text="7" id="seven" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("8")} text="8" id="eight" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("9")} text="9" id="nine" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("-")} text="-" id="subtract" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("4")} text="4" id="four" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("5")} text="5" id="five" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("6")} text="6" id="six" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("+")} text="+" id="add" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("1")} text="1" id="one" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("2")} text="2" id="two" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("3")} text="3" id="three" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput("0")} text="0" id="zero" className="btn-calc"/>
                            <CalculatorButton onClick={() => this.handleInput(".")} text="." id="decimal" className="btn-calc"/>
                            <CalculatorButton onClick={this.calculateResult} text="=" id="equals" className="btn-calc"/>
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