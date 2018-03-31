import React, {Component} from 'react';
import CompassIcon from './compassIcon'
import StateSelector from './stateSelector'

class Filters extends Component {


    liftLocationChange({target}) {
        this.props.handleChangeLocation(target.value)
        this.props.handleChangeState(target.label)
    }

    render() {
        return (
            <div className="row" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                justifyContent: 'center', overflowY: 'auto',  width: '100%'}}>
                <div className="col-12 text-center">
                    <CompassIcon style={{margin: '20px 0 10px'}} width="50px" height="50px"
                                 color={this.props.style.colors.white}/>
                    <h1 style={{
                        fontVariant: 'small-caps',
                        color: this.props.style.colors.white,
                        fontSize: '1.6em'
                    }}>Find
                        Your Adventure</h1>
                    <h2 style={{color: this.props.style.colors.white, fontSize: '.9em'}}>U.S. National Parks
                        Finder</h2>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center" style={{marginTop:'30px'}}>
                    <StateSelector style={this.props.style} onChange={this.liftLocationChange.bind(this)}
                                   handleChangeState={this.props.handleChangeState}
                                   handleChangeLocation={this.props.handleChangeLocation}
                                   location={this.props.location}/>
                </div>
            </div>
        );
    }
}

export default Filters;