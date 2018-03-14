import React, { Component } from 'react';
import CompassIcon from './components/compassIcon';
import './App.css';
import FilterBox from "./components/filters";

let styles = {
    colors: {
        white:          '#fff',
        offWhite:       '#d1d1d1',
        opaqueWhite:    'rgba(255,255,255,.7)',
        black:          '#232323',
        offBlack:       '#3b3b3b',
        opaqueBlack:    'rgba(0,0,0,.6)',
        lightGreen:     '#2bbbad',
        purplish:       'rgba(150,40,187,.5)',
        darkGrey:       '#454545',
        lightGrey:      '#878787',
        lighterGrey:    '#b6b6b6'
    }
};

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="text-center" style={{height:'35vh'}}>
            <CompassIcon style={{margin: '30px 0'}} width="80px" height="80px" color={styles.colors.white}/>
            <h1 style={{fontVariant:'small-caps',color:styles.colors.white}}>Find Your Adventure</h1>
            <h2 style={{color:styles.colors.white,fontSize:'1.25em'}}>U.S. National Parks Finder</h2>
        </div>
        <div className="row">
            <FilterBox style={styles}/>
        </div>


      </div>
    );
  }
}

export default App;
