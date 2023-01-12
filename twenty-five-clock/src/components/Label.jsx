/* eslint-disable no-useless-constructor */
import React from 'react'

class Label extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <>
                <p id={this.props.id} className={'text-white display-6'}>{this.props.text}</p>
            </>
        );  
    }
}

export default Label;