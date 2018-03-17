import React, {Component} from 'react';
import CheckBox from "./checkbox";
import StateSelector from './stateSelector'

class Filters extends Component{
    constructor(props) {
        super(props);
        this.state = {
            location: 'All States',
        };
    }

    changeLocation(location) {
        this.setState({location: location});
    }

    render(){
        return(
            <div className="row" style={this.props.flex.mainFlex}>
                <div className="col-12" style={{marginBottom: '30px',}}>
                    <h3 style={{
                        fontSize: '.8em', color: this.props.style.colors.offWhite,
                        marginBottom: '30px'
                    }}>Filters:</h3>
                    <StateSelector style={this.props.style}
                                   handleChangeLocation={this.changeLocation.bind(this)}
                                   location={this.state.location}/>
                </div>
                <div className="col-12">
                    <div className="content" style={this.props.flex.contentFlex}>
                        <div className="box" style={this.props.flex.boxFlex}>
                            <div style={this.props.flex.colFlex}>
                                <h3 style={{
                                    fontSize: '1em',
                                    color: this.props.style.colors.lightBlue
                                }}>Camping/Lodging</h3>
                                <CheckBox style={this.props.style} id="camping" label="Camping"/>
                                <CheckBox style={this.props.style} id="rv" label="RV"/>
                                <h3 style={{
                                    fontSize: '1em', color: this.props.style.colors.lightBlue,
                                    marginTop: '20px'
                                }}>Activities</h3>
                                <CheckBox style={this.props.style} id="arts-and-culture"
                                          label="Arts & Culture"/>
                                <CheckBox style={this.props.style} id="atv" label="ATV"/>
                                <CheckBox style={this.props.style} id="biking" label="Biking"/>
                                <CheckBox style={this.props.style} id="boating" label="Boating"/>
                                <CheckBox style={this.props.style} id="canyoneering" label="Canyoneering"/>
                                <CheckBox style={this.props.style} id="caving" label="Caving"/>
                                <CheckBox style={this.props.style} id="climbing" label="Climbing"/>
                                <CheckBox style={this.props.style} id="dog-sledding" label="Dog Sledding"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;