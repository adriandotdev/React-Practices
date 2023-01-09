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

        this.state = {
            
            audioClip: ''
        }

        this.setAudioClip = this.setAudioClip.bind(this);
    }

    componentDidMount() {

        document.title = 'Drum Machine | adriandotdev';
        
        document.addEventListener('keypress', (e) => {

            if (e.key.toLowerCase() === 'q') {
                console.log("Q is pressed.");

                document.getElementById('Q').play();

                this.setState({audioClip : 'Heater 1'});
            }
            else if (e.key.toLowerCase() === 'w') {
                console.log("W is pressed.");

                document.getElementById('W').play();

                this.setState({audioClip : 'Heater 2'});
            }
            else if (e.key.toLowerCase() === 'e') {
                console.log("E is pressed.");

                document.getElementById('E').play();

                this.setState({audioClip : 'Heater 3'});
            }
            else if (e.key.toLowerCase() === 'a') {
                console.log("A is pressed.");
                document.getElementById('A').play();

                this.setState({audioClip : 'Heater 4'});
            }
            else if (e.key.toLowerCase() === 's') {
                console.log("S is pressed.");
                document.getElementById('S').play();

                this.setState({audioClip : 'Clap'});
            }
            else if (e.key.toLowerCase() === 'd') {
                console.log("D is pressed.");
                document.getElementById('D').play();

                this.setState({audioClip : 'Open-HH'});
            }
            else if (e.key.toLowerCase() === 'z') {
                console.log("Z is pressed.");
                document.getElementById('Z').play();

                this.setState({audioClip : 'Kick and Hat'});
            }
            else if (e.key.toLowerCase() === 'x') {
                console.log("X is pressed.");
                document.getElementById('X').play();

                this.setState({audioClip : 'Kick'});
            }
            else if (e.key.toLowerCase() === 'c') {
                console.log("C is pressed.");
                document.getElementById('C').play();

                this.setState({audioClip : 'Closed-HH'});
            }
            else {
                this.setState({audioClip : ''});
            }
        })
    }

    setAudioClip(audioClip) {

        this.setState({audioClip: audioClip});
    }
    render() {
        return (
            <>
                <div className="bg-image">
                    
                    <Container style={{minHeight: '100vh'}} id="drum-machine" className="">
                        
                        <Row style={{minHeight: '100vh'}} className="row-cols-1 justify-content-center">
                            <Col className="d-flex flex-column justify-content-center align-items-center">
                                <h1 id="main-title" className="display-1 text-center fw-bold">Drum Machine</h1>
                                <p id="display" className="display-3 mb-4">{this.state.audioClip}</p>
                                  <Row className="row row-cols-3 row-cols-xxl-12 gap-4 justify-content-center">
                                    <Col className="w-auto">
                                        <DrumPad text="Q" audioFile="Heater-1.mp3" audioFileName="Heater 1" setAudioClip={this.setAudioClip}/>
                                    </Col>
                                    <Col className="w-auto" >
                                        <DrumPad text="W" audioFile="Heater-2.mp3" audioFileName="Heater 2" setAudioClip={this.setAudioClip}/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="E" audioFile="Heater-3.mp3" audioFileName="Heater 3" setAudioClip={this.setAudioClip}/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="A" audioFile="Heater-4.mp3" audioFileName="Heater 4" setAudioClip={this.setAudioClip}/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="S" audioFile="Clap.mp3" audioFileName="Clap" setAudioClip={this.setAudioClip}/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="D" audioFile="Open-HH.mp3" audioFileName="Open HH" setAudioClip={this.setAudioClip}/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="Z" audioFile="Kick_n_Hat.mp3" audioFileName="Kick and Hat" setAudioClip={this.setAudioClip}/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="X" audioFile="Kick.mp3" audioFileName="Kick" setAudioClip={this.setAudioClip}/>
                                    </Col>
                                    <Col className="w-auto">
                                        <DrumPad text="C" audioFile="Closed-HH.mp3" audioFileName="Closed-HH" setAudioClip={this.setAudioClip}/>
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