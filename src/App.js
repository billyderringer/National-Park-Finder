import React, {Component} from 'react';
import CompassIcon from './components/CompassIcon';
import Content from "./components/Content";

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
            location: 'AL',
            usState:'Alabama',
            data: false
        }

    }

    componentDidMount() {
        setTimeout(() =>
                this.fetchData(this.state.location)
            , 1500)
    }

    fetchData(loc) {
        fetch('https://developer.nps.gov/api/v1/parks?stateCode='
            + loc
            + '&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7')
            .then(res =>
            res.json())
            .then(dataRes => {
            this.setState({
                serverData:
                    {
                        parks: dataRes.data
                    },
                data: true,
                location: loc
            })
        })
    }

    changeLocation(location) {
        this.fetchData(location)
    }
    changeState(usState){
        this.setState({
                usState:usState
            })
    }


    render() {
        return (
            <div>
                {this.state.data ?
                    <div className="App container-fluid"
                        style={{
                            height: '100vh',
                            minWidth:'100vw',
                            backgroundColor:styles.colors.white
                        }}
                    >
                        <div className="row"
                             style={{
                                 backgroundColor:styles.colors.black,
                                 height:'7vh',
                                 display:'flex',
                                 alignItems:'center'
                             }}>
                            <div className="col-1 text-right">
                                <CompassIcon
                                    width="30px"
                                    height="30px"
                                    color={styles.colors.lightBlue}
                                    style={{
                                        padding:'0'
                                    }}
                                />
                            </div>
                            <div className="col-3">
                                <h3
                                    style={{
                                        color:styles.colors.white,
                                        fontSize:'1em',
                                        padding:'0'
                                    }}
                                >National Parks Finder</h3>
                            </div>
                            <div className="col-8 text-right">
                                <a href="http://billyderringer.com"
                                   style={{
                                       color:styles.colors.white,
                                       fontSize:'.8em',
                                       textDecoration:'none',
                                       marginRight:'30px'
                                   }}
                                >
                                    Back to Portfolio
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"
                                 style={{
                                     marginBottom: '10px'
                                 }}>
                                <Content
                                    style={styles}
                                    serverData={this.state.serverData}
                                    handleChangeState={this.changeState.bind(this)}
                                    handleChangeLocation={this.changeLocation.bind(this)}
                                    location={this.state.location}
                                    usState={this.state.usState}
                                />
                            </div>
                            <footer
                                    style={{
                                        width:'100vw',
                                        position:'fixed',
                                        bottom:'0',
                                        backgroundColor:styles.colors.black
                                    }}
                            >
                                <div className="row"
                                    style={{
                                        color:styles.colors.white,
                                        height:'7vh',
                                        display:'flex',
                                        alignItems:'center'
                                    }}
                                >
                                    <div className="col-12 text-center"
                                        style={{
                                            fontSize:'.8em'
                                        }}
                                    >
                                       © Billy Derringer 2018
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div> :
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                    }}>

                        {/* Splash Loader */}

                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <CompassIcon
                                        style={{
                                            marginBottom: '10px'
                                        }}
                                        width='50px'
                                        height='50px'
                                        color={styles.colors.white}
                                    />
                                    <h1
                                        style={{
                                            fontVariant: 'small-caps',
                                            color: styles.colors.white,
                                            fontSize: '1.6em'
                                        }}>
                                        Find Your Adventure
                                    </h1>
                                    <h2
                                        style={{
                                            color: styles.colors.white,
                                            fontSize: '.9em'}}>
                                        U.S. National Parks Finder
                                    </h2>
                                </div>
                            </div>
                            <div className="col-12"
                                 style={{
                                     display:'flex',
                                     justifyContent:'center',
                                     alignItems:'center',
                                     marginTop:'30px'}}>
                                <div className="loading-pulse" />
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default App;
