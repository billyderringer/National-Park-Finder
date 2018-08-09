import React, {Component} from 'react';
import Result from './Result';

class ResultsContainer extends Component {

    render() {
        let renderCheck = this.props.parks
            .filter(park => park.parkCode !== 'zh-cn/adam')
            .map((park,i) => {
                return <a href={park.url}
                          key={i}
                          target='_blank'
                          style={{textDecoration: 'none'}}
                >
                    <Result
                        name={park.fullName}
                        type={park.designation}
                        location={park.states}
                        img={this.props.thumbnail[this.props.location].parks[i][park.parkCode].images.url}
                        style={this.props.style}/>
                </a>
        })
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    overflowY: 'auto',
                    minWidth: '100%',
                    height:this.props.height
            }}>
                {renderCheck}
            </div>
        );
    }
}

export default ResultsContainer;