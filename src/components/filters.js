import React, {Component} from 'react';
import CheckBox from "./checkbox";
import StateSelector from './stateSelector'

class FilterBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            location : 'Choose State',
        };
    }

    changeLocation(location){
        this.setState({location: location});
    }
    render(){

        return(
            <div className="col-8 offset-2" style={{backgroundColor:this.props.style.colors.opaqueBlack, height:'65vh',
                padding:'50px 0 0 50px'}}>
                <div className="row">
                    <div className="col-3">
                        <div className="row">
                             <div className="col-12">
                                 <StateSelector style={this.props.style}
                                                handleChangeLocation={this.changeLocation.bind(this)}
                                                location={this.state.location}/>
                             </div>
                            <div className="col-12" style={{marginTop:'30px'}}>
                                <CheckBox style={this.props.style} id="camping" label="Camping"/>
                                <CheckBox style={this.props.style} id="rv" label="RV"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">

                    </div>
                </div>
            </div>
        );
    };
}

export default FilterBox;