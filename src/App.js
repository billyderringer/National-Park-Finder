import React, { Component } from 'react';
import CompassIcon from './components/compassIcon';
import StateSelector from './components/stateSelector'
import './App.css';

let styles = {
    colors: {
        white:          '#fff',
        offWhite:       '#d1d1d1',
        opaqueWhite:    'rgba(255,255,255,.7)',
        black:          '#232323',
        offBlack:       '#3b3b3b',
        opaqueBlack:    'rgba(0,0,0,.5)',
        lightGreen:     '#2bbbad',
        purplish:       'rgba(150,40,187,.5)',
        darkGrey:       '#454545',
        lightGrey:      '#878787',
        lighterGrey:    '#b6b6b6'
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location : 'Choose State',
        };
    }

    changeLocation(location){
        this.setState({location: location});
    }
  render() {
    return (
      <div className="App">
        <div className="text-center" style={{height:'30vh'}}>
            <CompassIcon style={{margin: '30px 0'}} width="80px" height="80px" color={styles.colors.white}/>
            <h1 style={{fontVariant:'small-caps',color:styles.colors.white}}>Find Your Adventure</h1>
            <h2 style={{color:styles.colors.white,fontSize:'1.25em'}}>U.S. National Parks Finder</h2>
        </div>
        <div style={{height:'70vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <StateSelector style={styles} handleChangeLocation={this.changeLocation.bind(this)} location={this.state.location}/>
        </div>


      </div>
    );
  }
}

export default App;
