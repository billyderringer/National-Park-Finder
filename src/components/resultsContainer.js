import React, {Component} from 'react';
import Result from './result';

class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.parks
        }
    }

    render() {
        return (
            <div style={{
                display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                justifyContent: 'center', overflowY: 'auto', height: '40vh', width: '100%'
            }}>
                {this.state.data.map((park,i) =>
                    <Result name={park.name} key={i} type={park.type} location={park.location}
                            img={park.imgUrl} style={this.props.style}/>
                )
                }
            </div>
        );
    }
}

export default ResultsContainer;