import React, {Component} from 'react';

class StateSelector extends Component {

    handleChange({target}){
        this.props.handleChangeLocation(target.value)
        let index = target.selectedIndex;
        this.props.handleChangeState(target[index].text)
    }

    render() {

        return (
            <div>
                <select
                    id="location"
                    value={this.props.location}
                    onChange={this.handleChange.bind(this)}
                    style={{
                        backgroundColor:this.props.style.colors.white,
                        color:this.props.style.colors.darkGrey
                    }}>
                    {this.props.selectorData.map((data,i)=>
                        <option
                            key={i}
                            label={this.props.selectorData[i].name}
                            value={this.props.selectorData[i].code}
                        >
                            {this.props.selectorData[i].name}
                        </option>
                    )}
                </select>
            </div>
        );
    }
}

export default StateSelector;