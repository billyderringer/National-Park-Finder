import React, {Component} from 'react';
import Filters from "./filters";
import ResultsCotainer from './resultsContainer';

let flex = {
    mainFlex:{
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    contentFlex: {
        flex: 1,
        display: 'flex',
        overflow: 'auto'
    },
    boxFlex: {
        display: 'flex',
        minHeight: 'min-content',
    },
    colFlex: {
        height: '40vh'
    }
}

class Content extends Component {

    render() {

        return (
            <div className="col-8 offset-2" style={{
                backgroundColor: this.props.style.colors.opaqueBlack, height: '65vh',
                padding: '50px 0 0 50px'
            }}>
                <div className="row">
                    <div className="col-3">
                        <Filters flex={flex} style={this.props.style}/>
                    </div>
                    <div className="col-9">
                        <h2 style={{color:this.props.style.colors.white, fontSize:'1em',margin:'50px 0 30px'}}>348 Results Found</h2>
                        <ResultsCotainer style={this.props.style}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Content;