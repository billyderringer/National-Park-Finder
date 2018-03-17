import React, {Component} from 'react';

class CheckBox extends Component{
    render(){
        let label = this.props.label;
        return(
            <div>
                <input type="checkbox" id={this.props.id}/>
                <label style={{color:this.props.style.colors.offWhite,paddingLeft:'5px',fontSize:'.8em'}}
                       htmlFor={this.props.id}>{label}</label>
            </div>
        );
    };
}

export default CheckBox;