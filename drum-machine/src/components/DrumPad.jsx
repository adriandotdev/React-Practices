import React from 'react'

class DrumPad extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="drum-pad d-flex justify-content-center align-items-center bg-dark text-white">
        <span>{this.props.text}</span>
    </div>
    )
  }
}

export default DrumPad;