import React, {Component} from 'react';
import Result from './result';

class ResultsContainer extends Component {

    render() {

        return (
            <div style={{
                display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                justifyContent: 'center', overflowY: 'auto', height: '40vh', width: '100%'
            }}>

                {console.log(this.props.location + ' :resultsCont')}
                {this.props.parks.map(park => {
                   return console.log(park.parkCode)
                })}

                {this.props.parks.map((park,i) =>
                            <Result name={park.fullName} key={i} type={park.designation} location={park.states}
                                    img={this.props.thumbnail[this.props.location].parks[i][park.parkCode].images.url} style={this.props.style}/>
                )}
            </div>
        );
    }
}

export default ResultsContainer;