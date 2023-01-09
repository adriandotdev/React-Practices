import React from 'react'
// import '../../public/audio/Heater-1.mp3'
class DrumPad extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const PATH = '/audio/';

    return (
      <div id={this.props.text} style={{width: '4rem', height: '5rem', padding: '3rem'}} className="drum-pad d-flex justify-content-center align-items-center bg-dark">
        <span className='display-5 fw-bold'>{this.props.text}</span>
        <audio id={this.props.text + "-audio"} autoplay>
            <source src={PATH + this.props.audioFile} type="audio/mpeg" ></source>
            Hello
        </audio>
    </div>
    )
  }
}

export default DrumPad;