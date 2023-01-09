import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


// COMPONENTS
import DrumPad from '../components/DrumPad';

class DrumMachine extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        document.title = 'Drum Machine | adriandotdev';

        document.addEventListener('keypress', (e) => {

            if (e.key.toLowerCase() === 'q') {
                console.log("Q is pressed.");

                document.getElementById('Q-audio').play();
            }
            else if (e.key.toLowerCase() === 'w') {
                console.log("W is pressed.");
            }
            else if (e.key.toLowerCase() === 'e') {
                console.log("E is pressed.");
            }
            else if (e.key.toLowerCase() === 'a') {
                console.log("A is pressed.");
            }
            else if (e.key.toLowerCase() === 's') {
                console.log("S is pressed.");
            }
            else if (e.key.toLowerCase() === 'd') {
                console.log("D is pressed.");
            }
            else if (e.key.toLowerCase() === 'z') {
                console.log("Z is pressed.");
            }
            else if (e.key.toLowerCase() === 'x') {
                console.log("X is pressed.");
            }
            else if (e.key.toLowerCase() === 'c') {
                console.log("C is pressed.");
            }
        })
    }

    render() {
        return (
            <>
                <div className="bg-image">
                    
                    <Container style={{minHeight: '100vh'}} id="drum-machine" className="">
                        
                        <Row style={{minHeight: '100vh'}} className="row-cols-1 justify-content-center">
                            <Col className="d-flex flex-column justify-content-center align-items-center">
                                <h1 id="main-title" className="display-1 text-center fw-bold">Drum Machine</h1>
                                <p id="display" className="display-3 mb-4">Result</p>
                                  <Row className="row row-cols-3 row-cols-xxl-12 gap-4 justify-content-center">
                                    <Col className="w-auto">
                                        <DrumPad text="Q"/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="W"/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="E"/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="A"/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="S"/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="D"/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="Z"/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="X"/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="C"/>
                                    </Col>
                                </Row>
                            </Col>
                            {/* <Col className="bg-info align-self-start">
                              
                            </Col> */}
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default DrumMachine;