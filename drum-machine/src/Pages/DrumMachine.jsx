import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
class DrumMachine extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        document.title = 'Drum Machine | adriandotdev';
    }

    render() {
        return (
            <>
                <Container id="drum-machine">
                    <Row>
                        <Col className="d-flex gap-2">
                            
                            <div className="drum-pad">
                                W
                            </div>
                            <div className="drum-pad">
                                E
                            </div>
                            <div className="drum-pad">
                                A
                            </div>
                            <div className="drum-pad">
                                S
                            </div>
                            <div className="drum-pad">
                                D
                            </div>
                            <div className="drum-pad">
                                Z
                            </div>
                            <div className="drum-pad">
                                X
                            </div>
                            <div className="drum-pad">
                                C
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default DrumMachine;