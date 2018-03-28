import React, {Component} from 'react';
import CompassIcon from './components/compassIcon';
import splash from './assets/splash-bg-lg.jpg'
import Content from "./components/content";

let styles = {
    colors: {
        white: '#fff',
        offWhite: '#d1d1d1',
        opaqueWhite: 'rgba(255,255,255,.7)',
        black: '#232323',
        offBlack: '#3b3b3b',
        opaqueBlack: 'rgba(0,0,0,.6)',
        lightGreen: '#2bbbad',
        lightBlue: '#448cbb',
        darkGrey: '#454545',
        lightGrey: '#878787',
        lighterGrey: '#b6b6b6'
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            serverData: {
                parks: [],
                thumbnail: ''
            },
            location: 'IL',
            data: false
        }

    }

    componentDidMount() {
        setTimeout(() =>
                this.fetchData(this.state.location)
            , 1500)
    }

    fetchData(data) {
        fetch('https://developer.nps.gov/api/v1/parks?stateCode=' + data + '&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7').then(res =>
            res.json()).then(dataRes => {
            this.setState({
                serverData: {parks: dataRes.data}, data: true, location: data
            })
        })

    }

    changeLocation(location) {
        this.fetchData(location)
    }


    render() {
        return (
            <div>
                {this.state.data ?
                    <div className="App container-fluid" style={{height: '100vh',minWidth:'100vw', paddingTop:'50px',
                    background:'url('+splash+') 0% 0% / 100% 100% no-repeat',backgroundSize:'cover'}}>
                        <div className="row">
                            <div className="col-10 offset-1" style={{
                                backgroundColor: styles.colors.opaqueBlack,
                                padding: '20px 5px 5px 20px', marginBottom: '10px'}}>
                                <Content style={styles} serverData={this.state.serverData}
                                         handleChangeLocation={this.changeLocation.bind(this)}
                                         location={this.state.location}/>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                                <cite style={{color: styles.colors.white, fontSize: '.7em'}}>
                                    Images by <a href="https://www.nps.gov" target="_blank"
                                                 rel="noopener noreferrer">NPS.GOV</a></cite>
                            </div>
                        </div>
                    </div> : <div style={{
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <CompassIcon style={{margin: '20px 0 10px'}} width="50px" height="50px"
                                                 color={styles.colors.white}/>
                                    <h1 style={{fontVariant: 'small-caps', color: styles.colors.white, fontSize: '1.6em'}}>Find
                                        Your Adventure</h1>
                                    <h2 style={{color: styles.colors.white, fontSize: '.9em'}}>U.S. National Parks Finder</h2>
                                </div>
                            </div>
                            <div className="col-12" style={{display:'flex',justifyContent:'center',
                                alignItems:'center',marginTop:'30px'}}>
                                <div className="loading-pulse">
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </div>
        );
    }
}

export default App;
