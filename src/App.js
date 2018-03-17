import React, { Component } from 'react';
import CompassIcon from './components/compassIcon';
import './App.css';
import Content from "./components/content";
import StateSelector from "./components/stateSelector";

let styles = {
    colors: {
        white:          '#fff',
        offWhite:       '#d1d1d1',
        opaqueWhite:    'rgba(255,255,255,.7)',
        black:          '#232323',
        offBlack:       '#3b3b3b',
        opaqueBlack:    'rgba(0,0,0,.6)',
        lightGreen:     '#2bbbad',
        lightBlue:      '#448cbb',
        darkGrey:       '#454545',
        lightGrey:      '#878787',
        lighterGrey:    '#b6b6b6'
    }
};

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="text-center" style={{height:'25vh'}}>
            <CompassIcon style={{margin: '30px 0 10px'}} width="60px" height="60px" color={styles.colors.white}/>
            <h1 style={{fontVariant:'small-caps',color:styles.colors.white,fontSize:'1.75em'}}>Find Your Adventure</h1>
            <h2 style={{color:styles.colors.white,fontSize:'1em'}}>U.S. National Parks Finder</h2>
        </div>
        <div className="row">
            <Content style={styles}/>
        </div>

        <div className="row">
            <div className="col-12 text-center" style={{marginTop:'20px'}}>
                <a href="http://billyderringer.com" style={{color:styles.colors.white}}>Back to Portfolio</a>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
