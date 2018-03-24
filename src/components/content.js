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

let thumbnails = {
    states: [{
        AL: {parks:[
                {'bicr':{
                images: {url:''}
            }},
                {'frri':{
                images: {url:''}
            }},
                {'hobe':{
                images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/514C7D2A-1DD8-B71C-0E1F796A8DBABCA8.jpg'}
            }},
                {'liri':{
                images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/EBD2CD6C-1DD8-B71C-073C5687E76EB168.jpg'}
            }},
                {'mush':{
                images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/B55F2937-1DD8-B71C-07E6412730871CB3.jpg'}
            }},
                {'natt':{
                images: {url: ''}
            }},
                {'natr':{
                images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/B00B7136-1DD8-B71C-0E853FFA5C794F32.jpg'}
            }},
                {'ruca':{
                images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/9813DECB-1DD8-B71C-07093FC5B8C45005.jpg'}
            }},
                {'semo':{
                images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/8502E847-1DD8-B71C-0EEC3981B7C29EF6.jpg'}
            }},
                {'trte':{
                images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/872CC03F-1DD8-B71C-0EB6A652D3AC5A01.jpg'}
            }},
                {'tuai':{
                images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/267A25EF-1DD8-B71C-0EC7BF0EC06E36A1.jpg'}
            }},
                {'tuin': {
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/8B11E708-1DD8-B71C-0E7F51016E1E70AA.jpg'}
                    }}
            ]},
        AK: {parks:[
                {'alag':{
                        images: {url:'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/5694C533-1DD8-B71C-0E50A86AAFB20577.jpg'}
                    }},
                {'anch':{
                        images: {url:'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/DC60A2D1-1DD8-B71C-0709292B8F5AD9B8.jpg'}
                    }},
                {'aleu':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/1E57FB96-1DD8-B71C-0E508D4D65E8BE29.jpg'}
                    }},
                {'ania':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/BA418C62-1DD8-B71C-0E394D7334777783.jpg'}
                    }},
                {'bela':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/27AF0461-1DD8-B71C-07D070EADBC96CC8.jpg'}
                    }},
                {'cakr':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/9E6BA124-1DD8-B71C-076613646CAB7255.jpg'}
                    }},
                {'dena':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/EA50725B-1DD8-B71C-0E4DE3788CCC55B7.jpg'}
                    }},
                {'gaar':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/E59D47C8-1DD8-B71C-0E2377DAEDEC5D95.jpg'}
                    }},
                {'glba':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/9040E472-1DD8-B71C-0E7CFADAB07C304F.jpg'}
                    }},
                {'inup':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/1E0BC8AD-1DD8-B71C-0E4962FBE84ECEB1.jpg'}
                    }},
                {'katm':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/4A96F57F-1DD8-B71C-0759F46316E98E89.jpg'}
                    }},
                {'kefj': {
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/F2790F30-1DD8-B71C-0E1D60E78ED8A40E.jpg'}
                    }},
                {'klgo':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/B7A06D3E-1DD8-B71C-073AD9D6F3CC02E9.jpg'}
                    }},
                {'kova':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/8D7610A3-1DD8-B71C-0EC899D81936C085.jpg'}
                    }},
                {'lacl': {
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/F360526E-1DD8-B71C-07791AB2B3BF40AB.jpg'}
                    }},
                {'noat':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/BF6BF446-1DD8-B71C-0EEE92770B3F8F03.jpg'}
                    }},
                {'sitk':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/54F157BD-1DD8-B71C-07435B527A0CE7F6.jpg'}
                    }},
                {'valr': {
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/AAF1356D-1DD8-B71B-0BA70DF89F8FDA8C.jpg'}
                    }},
                {'wrst':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/4C71AD59-1DD8-B71C-071531F2D1D334A6.jpg'}
                    }},
                {'yuch':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/B0847906-1DD8-B71C-07E0852442A8F3FD.jpg'}
                    }}
            ]},
        AZ:
            {
                name: '',
                images: {url:''}
            }
        ,
        AR: [
            {
                name: '',
                images: {url:''}
            }
        ]
    }]
}

class Content extends Component {
    constructor() {
        super();
        this.state = {
            serverData: {
                parks: [],
                thumbnail: ''
            },
            location: 'AL',
            data:false
        }

    }

    componentDidMount(){
        this.fetchData(this.state.location,this.state.location)
        console.log('didMount')
    }

    fetchData(data,location) {
        fetch('https://developer.nps.gov/api/v1/parks?stateCode=' + data + '&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7').then(res =>
            res.json()).then(dataRes => {
            this.setState({
                serverData: {parks: dataRes.data}, data:true,location:location
            })
        })

    }


    changeLocation(location) {
        const loc = location
        this.fetchData(loc,location)

        console.log(this.state.serverData.parks + ' :changeLocation')
    }

    render() {
        return (
            <div className="col-8 offset-2" style={{
                backgroundColor: this.props.style.colors.opaqueBlack,
                padding: '20px 5px 5px 20px', marginBottom: '10px'
            }}>{this.state.data ?
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

                            {this.state.serverData.parks && this.state.serverData.parks.length} Results Found</h2>

                            < ResultsContainer thumbnail={thumbnails.states[0]} location={this.state.location}
                                               parks={this.state.serverData.parks} style={this.props.style}/>
                        {console.log(this.state.location + ' :afterRender')}
                    </div>
                </div>: <div>Hello</div>}
            </div>
        );
    };
}

export default Content;