import React, {Component} from 'react';
import Result from './result';

class ResultsContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div style={{
                display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                justifyContent: 'center', overflowY: 'auto', height: '40vh', width: '100%'
            }}>

                {this.props.parks.map((park,i) =>
                    <Result name={park.fullName} key={i} type={park.designation} location={park.states}
                            img={park.imgUrl} style={this.props.style}/>
                )
                }
            </div>
        );
    }
}

export default ResultsContainer;