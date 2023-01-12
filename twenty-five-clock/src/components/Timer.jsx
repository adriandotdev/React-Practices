/* eslint-disable no-useless-constructor */
import React from 'react'
import TimeControllers from './TimeControllers';
import {ButtonGroup} from 'react-bootstrap';

class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        breakLength: 5,
        sessionLength: 25,
        time: 25,
        seconds: 0,
        isRunning: false,
        isInSession: true,
        isInBreak: false,
        timeIntervalRunner: undefined
    }

     this.incrementBreakLength = this.incrementBreakLength.bind(this);
     this.decrementBreakLength = this.decrementBreakLength.bind(this);
     this.incrementSessionLength = this.incrementSessionLength.bind(this);
     this.decrementSessionLength = this.decrementSessionLength.bind(this);

     this.start = this.start.bind(this);
     this.pause = this.start.bind(this);
     this.reset = this.reset.bind(this);
  }

  componentWillMount() {
    document.title = "25 + 5 Clock | adriandotdev";
  }
  incrementBreakLength() {

    this.setState(state => ({
        breakLength: state.breakLength + 1 <= 60 ? state.breakLength + 1 : state.breakLength
    }))
  }

  decrementBreakLength() {

    this.setState(state => ({
        breakLength: state.breakLength - 1 >= 1 ? state.breakLength - 1 : state.breakLength
    }))
  }

  incrementSessionLength() {
    this.setState(state => ({
        sessionLength: state.sessionLength + 1 <= 60 ? state.sessionLength + 1 : state.sessionLength,
        time: state.isInSession && state.sessionLength + 1 <= 60 ? state.sessionLength + 1 : state.time 
    }))
  }

  decrementSessionLength() {
    this.setState(state => ({
        sessionLength: state.sessionLength - 1 >= 1 ? state.sessionLength - 1 : state.sessionLength,
        time: state.isInSession && state.sessionLength - 1 >= 1 ? state.sessionLength - 1 : state.time
    }))
  }

  reset() {

    document.getElementById('beep').load();
    clearInterval(this.state.timeIntervalRunner);

    this.setState({breakLength: 5, sessionLength: 25, time: 25, seconds: 0, isInBreak: false, isInSession: true, isRunning: false})
  }

  pause() {

    clearInterval(this.state.timeIntervalRunner);
  }

  start() {
    
    clearInterval(this.state.timeIntervalRunner);
    
    this.setState(state => ({isRunning: !state.isRunning}))

    let interv = setInterval(() => {

        if (this.state.isRunning) {
            let seconds = this.state.seconds;

            seconds -= 1;

            if (seconds < 0) {

            let time = this.state.time;

            time -= 1;

            if (time < 0) {
                
                this.setState({isRunning: false});
                
                document.getElementById("beep").play();
                // clearInterval(this.state.timeIntervalRunner);

                setTimeout(() => {
                    if (this.state.isInSession) {
                    this.setState({isRunning: true, isInSession: false, isInBreak: true, time: this.state.breakLength, seconds: 0});
                    }
                    else {
                        this.setState({isRunning: true, isInSession: true, isInBreak: false, time: this.state.sessionLength, seconds: 0})
                    }
                }, 2000)
            }
            else {
                this.setState(state => ({time: state.time - 1, seconds: 59}))
            }
            }
            else {
                this.setState(state => ({seconds: state.seconds - 1}))
            }
        }
    }, 1000)

    this.setState({timeIntervalRunner: interv})
  }

  render() {
    return (
      <div style={{minHeight: '100vh'}} className="d-flex justify-content-center align-items-center bg-dark">
        <div id="main-content" className="bg-dark container rounded shadow py-2">
            <TimeControllers 
                incBL={() => this.incrementBreakLength()} 
                decBL={() => this.decrementBreakLength()}
                incSL={() => this.incrementSessionLength()}
                decSL={() => this.decrementSessionLength()}
                state={this.state} />
            <h1 id="time-left" className='display-1 text-white text-center fw-bold'>
                {this.state.time < 10 ? ("0" + this.state.time) : this.state.time}
                :
                {this.state.seconds < 10 ? ("0" + this.state.seconds) : this.state.seconds}
            </h1>
            <h2 id="timer-label" className="text-light text-center mb-3">{this.state.isInSession ? "Session" : "Break"}</h2>
            <div className="d-flex justify-content-center mb-3">
                <ButtonGroup className="bg-success w-50">
                    <button onClick={!this.state.isRunning ? this.start : this.pause} id="start_stop" className={`btn text-white ${this.state.isRunning ? 'btn-info' : 'btn-success'}`}>
                        <span className="h6 text-center fw-bold">{this.state.isRunning ? "Pause" : "Start"}</span>
                    </button>
                    <button onClick={this.reset} id="reset" className='btn btn-danger text-white'>
                        <span className="h6 text-center fw-bold">Reset</span>
                    </button>
                </ButtonGroup>
            </div>
            <audio id="beep">
                <source src="/audio/ALARM SOUND.wav" type="audio/wav" />
            </audio>
        </div>
      </div>
    )
  }
}

export default Timer;