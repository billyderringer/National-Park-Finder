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

let fakeServerData = {
    parks: [
        {
            name: 'Yosemite',
            type: 'National Park',
            location: 'Wyoming',
            imgUrl: 'https://www.nps.gov/featurecontent/yose/anniversary/wp-content/themes/anniversary2014/library/images/yose1smallSummer.jpg'
        },
        {
            name: 'Grand Teton',
            type: 'National Park',
            location: 'Wyoming',
            imgUrl: 'https://www.nps.gov/grte/learn/nature/images/Snake_River_Overlook_2005_Wiles.JPG?maxwidth=1200&maxheight=1200&autorotate=false'
        },
        {
            name: 'Acadia',
            type: 'National Park',
            location: 'Maine',
            imgUrl: 'http://trailmob.com/images/lifestyle/8156/bass-harbor-lighthouse-anp-cc-flickr-mathew-barron__648.jpg'
        },
        {
            name: 'Abraham Lincoln Birthplace',
            type: 'Historical Park',
            location: 'Kentucky',
            imgUrl: 'https://www.fhwa.dot.gov/byways/Uploads/asset_files/000/017/329/Hodgenville_-_Lincoln_Birthplace_2.JPG'
        },
        {
            name: 'Adams',
            type: 'Historical Park',
            location: 'Massachusetts',
            imgUrl: 'https://www.nps.gov/adam/planyourvisit/images/OH-GARDEN-WITH-BENCH-share-your-experience.jpg?maxwidth=650&autorotate=false'
        },
        {
            name: 'African American Civil War Memorial',
            type: 'Memorial',
            location: 'District of Columbia',
            imgUrl: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/1B1EDA47-1DD8-B71B-0B3C160CAE556118.jpg?width=950&quality=90&mode=crop'
        },
        {
            name: 'African Burial Ground',
            type: 'Monument',
            location: 'New York',
            imgUrl: 'https://www.nps.gov/afbg/planyourvisit/images/Operatinghours_2.jpg'
        },
        {
            name: 'Agate Fossil Beds',
            type: 'Monument',
            location: 'Nebraska',
            imgUrl: 'https://www.nps.gov/agfo/learn/nature/images/Fossil-Hills-blue-sky_1.jpg?maxwidth=650&autorotate=false'
        },
        {
            name: 'Ala Kahakai',
            type: 'Historic Trail',
            location: 'Hawai\'i',
            imgUrl: 'https://www.nps.gov/im/pacn/images/alka_puho_invasives.jpg?maxwidth=650&autorotate=false'
        },
        {
            name: 'Alagnak',
            type: 'Wild River',
            location: 'Alaska',
            imgUrl: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6D3DE1E6-1DD8-B71B-0BCCD1CA7363F2B8.jpg?width=950&quality=90&mode=crop'
        },
        {
            name: 'Alaska Public Lands',
            type: 'Public Land',
            location: 'Alaska',
            imgUrl: 'https://www.nps.gov/common/uploads/banner_image/akr/homepage/09FDED4C-1DD8-B71B-0B616A2E948966AE.jpg'
        },
        {
            name: 'Alcatraz Island',
            type: 'Island',
            location: 'California',
            imgUrl: 'https://www.nationalparks.org/sites/default/files/styles/wide_1x/public/Alcatraz_iStock_000012379929.jpg?itok=qdTPVtmf'
        }
    ]
}

class Content extends Component {
    constructor() {
        super();
        this.state = {
            serverData: {parks:[]}
        }
    }

    componentWillMount() {
        fetch('https://developer.nps.gov/api/v1/parks?stateCode=il&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7').then(res =>
        res.json()).then(dataRes => {this.setState({serverData: {parks: dataRes.data}})})
    }

    render() {

        return (
            <div className="col-8 offset-2" style={{
                backgroundColor: this.props.style.colors.opaqueBlack,
                padding: '20px 5px 5px 20px', marginBottom: '10px'
            }}>
                <div className="row">
                    <div className="col-3">
                        <Filters flex={flex} style={this.props.style}/>
                    </div>
                    <div className="col-9">
                        <h2 style={{
                            color: this.props.style.colors.white,
                            fontSize: '1em',
                            margin: '50px 20px 30px 0',
                            float: 'right'
                        }}>
                            {console.log(this.state.serverData.parks)}
                            {this.state.serverData.parks && this.state.serverData.parks.length} Results Found</h2>
                        <ResultsContainer parks={this.state.serverData.parks} style={this.props.style}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Content;