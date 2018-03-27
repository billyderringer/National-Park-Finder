import React, {Component} from 'react';

class StateSelector extends Component {

    handleChange({target}){
        this.props.handleChangeLocation(target.value)
    }

    render() {

        return (
            <div>
                <select id="location" value={this.props.location}
                        onChange={this.handleChange.bind(this)}
                        style={{backgroundColor:this.props.style.colors.opaqueWhite,
                            color:this.props.style.colors.darkGrey}}>
                    <option label="States" value="STATES">All States</option>
                    <option label="Alabama" value="AL">Alabama</option>
                    <option label="Alaska" value="AK">Alaska</option>
                    <option label="Arizona" value="AZ">Arizona</option>
                    <option label="Arkansas" value="AR">Arkansas</option>
                    <option label="California" value="CA">California</option>
                    <option label="Colorado" value="CO">Colorado</option>
                    <option label="Connecticut" value="CT">Connecticut</option>
                    <option label="Delaware" value="DE">Delaware</option>
                    <option label="Florida" value="FL">Florida</option>
                    <option label="Georgia" value="GA">Georgia</option>
                    <option label="Hawaii" value="HI">Hawaii</option>
                    <option label="Idaho" value="ID">Idaho</option>
                    <option label="Illinois" value="IL">Illinois</option>
                    <option label="Indiana" value="IN">Indiana</option>
                    <option label="Iowa" value="IA">Iowa</option>
                    <option label="Kansas" value="KS">Kansas</option>
                    <option label="Kentucky" value="KY">Kentucky</option>
                    <option label="Louisiana" value="LA">Louisiana</option>
                    <option label="Maine" value="ME">Maine</option>
                    <option label="Maryland" value="MD">Maryland</option>
                    <option label="Massachusetts" value="MA">Massachusetts</option>
                    <option label="Michigan" value="MI">Michigan</option>
                    <option label="Minnesota" value="MN">Minnesota</option>
                    <option label="Mississippi" value="MS">Mississippi</option>
                    <option label="Missouri" value="MO">Missouri</option>
                    <option label="Montana" value="MT">Montana</option>
                    <option label="Nebraska" value="NE">Nebraska</option>
                    <option label="Nevada" value="NV">Nevada</option>
                    <option label="New Hampshire" value="NH">New Hampshire</option>
                    <option label="New Jersey" value="NJ">New Jersey</option>
                    <option label="New Mexico" value="NM">New Mexico</option>
                    <option label="New York" value="NY">New York</option>
                    <option label="North Carolina" value="NC">North Carolina</option>
                    <option label="North Dakota" value="ND">North Dakota</option>
                    <option label="Ohio" value="OH">Ohio</option>
                    <option label="Oklahoma" value="OK">Oklahoma</option>
                    <option label="Oregon" value="OR">Oregon</option>
                    <option label="Pennsylvania" value="PA">Pennsylvania</option>
                    <option label="Rhode Island" value="RI">Rhode Island</option>
                    <option label="South Carolina" value="SC">South Carolina</option>
                    <option label="South Dakota" value="SD">South Dakota</option>
                    <option label="Tennessee" value="TN">Tennessee</option>
                    <option label="Texas" value="TX">Texas</option>
                    <option label="Utah" value="UT">Utah</option>
                    <option label="Vermont" value="VT">Vermont</option>
                    <option label="Virginia" value="VA">Virginia</option>
                    <option label="Washington" value="WA">Washington</option>
                    <option label="West Virginia" value="WV">West Virginia</option>
                    <option label="Wisconsin" value="WI">Wisconsin</option>
                    <option label="Wyoming" value="WY">Wyoming</option>
                    <option label="Guam" value="GU">Guam</option>
                    <option label="Puerto Rico" value="PR">Puerto Rico</option>
                    <option label="Virgin Islands" value="VI">Virgin Islands</option>
                </select>
            </div>
        );
    }
}

export default StateSelector;