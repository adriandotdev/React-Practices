/* eslint-disable no-useless-constructor */
import React from 'react'
// import '../../public/audio/Heater-1.mp3'
class DrumPad extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const PATH = '/audio/';

    return (
      <div onClick={() => {
        document.getElementById(this.props.text).play();

        this.props.setAudioClip(this.props.audioFileName);
      }} id={this.props.text + " pad"} style={{width: '4rem', height: '5rem', padding: '3rem'}} className="drum-pad d-flex justify-content-center align-items-center bg-dark">
        <span className='display-5 fw-bold'>{this.props.text}</span>
        <audio src={PATH + this.props.audioFile} class="clip" id={this.props.text}>
            <source src={PATH + this.props.audioFile} type="audio/mpeg" ></source>
            Hello
        </audio>
    </div>
    )
  }
}

export default DrumPad;