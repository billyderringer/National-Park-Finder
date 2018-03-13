import React, { Component } from 'react';
import compass from '../assets/compass-icon-white-60x60.png';

class CompassIcon extends Component {
    render() {
        return (
            <img src={compass} style={{width:this.props.width,height:this.props.height,margin:'50px'}} alt="compass-icon"/>
    );
    }
}

export default CompassIcon;