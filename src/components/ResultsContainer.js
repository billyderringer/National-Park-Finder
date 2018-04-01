import React, {Component} from 'react';
import Result from './Result';

class ResultsContainer extends Component {

    render() {

        return (
            <div
                style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                overflowY: 'auto',
                height: '60vh',
                minWidth: '100%',
                marginBottom:'30px'
            }}>
                {this.props.parks.map((park,i) =>
                            <Result
                                name={park.fullName}
                                key={i}
                                type={park.designation}
                                location={park.states}
                                img={this.props.thumbnail[this.props.location].parks[i][park.parkCode].images.url}
                                style={this.props.style}/>
                )}
            </div>
        );
    }
}

export default ResultsContainer;