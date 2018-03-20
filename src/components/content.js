import React, {Component} from 'react';
import Filters from "./filters";
import ResultsContainer from './resultsContainer';

let flex = {
    mainFlex: {
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
    constructor() {
        super();
        this.state = {
            serverData: {
                parks:[]
            },
            location: 'TX'
        }
    }

    componentDidMount() {
        fetch('https://developer.nps.gov/api/v1/parks?stateCode='+this.state.location+'&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7').then(res =>
        res.json()).then(dataRes => {this.setState({
            serverData:{parks: dataRes.data}})})
    }

    changeLocation(location){
        this.setState({location: location});
        setTimeout (() =>{fetch('https://developer.nps.gov/api/v1/parks?stateCode='+this.state.location+'&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7')
            .then(res => res.json()).then(dataRes => {this.setState({
            serverData:{parks: dataRes.data}})})},100)
    }

    render() {

        return (

            <div className="col-8 offset-2" style={{
                backgroundColor: this.props.style.colors.opaqueBlack,
                padding: '20px 5px 5px 20px', marginBottom: '10px'
            }}>
                <div className="row">
                    <div className="col-3">
                        <Filters flex={flex} handleChangeLocation={this.changeLocation.bind(this)}
                                 location={this.state.location} style={this.props.style}/>
                    </div>
                    <div className="col-9">
                        <h2 style={{
                            color: this.props.style.colors.white,
                            fontSize: '1em',
                            margin: '50px 20px 30px 0',
                            float: 'right'
                        }}>
                            {console.log(this.state.location)}
                            {this.state.serverData.parks && this.state.serverData.parks.length} Results Found</h2>
                        <ResultsContainer parks={this.state.serverData.parks} style={this.props.style}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Content;