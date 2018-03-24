import React, {Component} from 'react';
import CheckBox from "./checkbox";
import StateSelector from './stateSelector'

class Filters extends Component{


    liftLocationChange({target}){
        this.props.handleChangeLocation(target.value)
    }

    render(){
        return(
            <div className="row" style={this.props.flex.mainFlex}>
                <div className="col-12" style={{marginBottom: '30px',}}>
                    <h3 style={{
                        fontSize: '.8em', color: this.props.style.colors.offWhite,
                        marginBottom: '30px'
                    }}>Filters:</h3>
                    <StateSelector style={this.props.style} onChange={this.liftLocationChange.bind(this)}
                                   handleChangeLocation={this.props.handleChangeLocation}
                                   location={this.props.location} />
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
                                <CheckBox style={this.props.style} id="fishing" label="Fishing"/>
                                <CheckBox style={this.props.style} id="flying" label="Flying"/>
                                <CheckBox style={this.props.style} id="food" label="Food"/>
                                <CheckBox style={this.props.style} id="golfing" label="Golfing"/>
                                <CheckBox style={this.props.style} id="guided-tours" label="Guided Tours"/>
                                <CheckBox style={this.props.style} id="hands-on" label="Hands-On"/>
                                <CheckBox style={this.props.style} id="hiking" label="Hiking"/>
                                <CheckBox style={this.props.style} id="horse-trekking" label="Horse Trekking"/>
                                <CheckBox style={this.props.style} id="hunting-and-gathering" label="Hunting & Gathering"/>
                                <CheckBox style={this.props.style} id="ice-skating" label="Ice Skating"/>
                                <CheckBox style={this.props.style} id="junior-ranger-program" label="Junior Ranger Program"/>
                                <CheckBox style={this.props.style} id="living-history" label="Living History"/>
                                <CheckBox style={this.props.style} id="museum-exhibits" label="Museum Exhibits"/>
                                <CheckBox style={this.props.style} id="paddling" label="Paddling"/>
                                <CheckBox style={this.props.style} id="park-film" label="Park Film"/>
                                <CheckBox style={this.props.style} id="playground" label="Playground"/>
                                <CheckBox style={this.props.style} id="scuba-diving" label="Scuba Diving"/>
                                <CheckBox style={this.props.style} id="shopping" label="Shopping"/>
                                <CheckBox style={this.props.style} id="skiing" label="Skiing"/>
                                <CheckBox style={this.props.style} id="snorkeling" label="Snorkeling"/>
                                <CheckBox style={this.props.style} id="snow-play" label="Snow Play"/>
                                <CheckBox style={this.props.style} id="snowmobiling" label="Snowmobiling"/>
                                <CheckBox style={this.props.style} id="snowshoeing" label="Snowshoeing"/>
                                <CheckBox style={this.props.style} id="surfing" label="Surfing"/>
                                <CheckBox style={this.props.style} id="swimming" label="Swimming"/>
                                <CheckBox style={this.props.style} id="team-sports" label="Team Sports"/>
                                <CheckBox style={this.props.style} id="tubing" label="Tubing"/>
                                <CheckBox style={this.props.style} id="water-skiing" label="Water Skiing"/>
                                <CheckBox style={this.props.style} id="wildlife-watching" label="Wildlife Watching"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters;