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

/*{this.state.data.parks.map(park =>
                    <Result name={park.name} type={park.type} location={park.location}
                            img={park.imgUrl} style={this.props.style}/>
                )
                }*/

/*{total: 6, data: Array(6), limit: 50, start: 1}
data
    :
    Array(6)
0
:
{states: "ME", latLong: "lat:44.30777545, long:-68.30063316", description: "Acadia National Park protects the natural beauty o…45 miles of carriage roads with 16 stone bridges.", designation: "National Park", parkCode: "acad", …}
1
:
{states: "CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV", latLong: "lat:40.41029575, long:-76.4337548", description: "The Appalachian Trail is a 2,180+ mile long public…erous state agencies and thousands of volunteers.", designation: "National Scenic Trail", parkCode: "appa", …}
2
:
{states: "ME", latLong: "lat:45.9567565917969, long:-68.712287902832", description: "Spread across a wild landscape offering spectacula…t skies that have attracted humans for millennia.", designation: "National Monument", parkCode: "kaww", …}
3
:
{states: "ME", latLong: "lat:47.2831115723, long:-68.4110870361", description: "Maine Acadians share beliefs and experiences tying…ort Maine Acadian culture in the St. John Valley.", designation: "", parkCode: "maac", …}
4
:
{states: "ME", latLong: "lat:44.87357167, long:-66.96209908", description: "For many years, Franklin D. Roosevelt summered on …ymbol of cooperation between the U.S. and Canada.", designation: "International Park", parkCode: "roca", …}
5
:
{states: "ME", latLong: "lat:45.12858838, long:-67.13363651", description: "The winter of 1604-1605 on Saint Croix Island was …ng of French presence in North America had begun.", designation: "International Historic Site", parkCode: "sacr", …}
length
    :
    6
__proto__
    :
    Array(0)
limit
    :
    50
start
    :
    1
total
    :
    6
__proto__
    :
    Object*/