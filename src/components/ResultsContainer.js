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
                height: '65vh',
                minWidth: '100%'
            }}>
                {this.props.parks.map((park,i) =>
                    <a href={park.url}
                       target='_blank'
                       style={{textDecoration:'none'}}
                    >
                        <Result
                                name={park.fullName}
                                key={i}
                                type={park.designation}
                                location={park.states}
                                img={this.props.thumbnail[this.props.location].parks[i][park.parkCode].images.url}
                                style={this.props.style}/>
                    </a>
                )}
            </div>
        );
    }
}

export default ResultsContainer;