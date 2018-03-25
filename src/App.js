import React, { Component } from 'react';
import CompassIcon from './components/compassIcon';
import './App.css';
import Content from "./components/content";

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
      <div className="App container-fluid" style={{height:'100vh'}}>
        <div className="text-center">
            <CompassIcon style={{margin: '30px 0 10px'}} width="60px" height="60px" color={styles.colors.white}/>
            <h1 style={{fontVariant:'small-caps',color:styles.colors.white,fontSize:'1.75em'}}>Find Your Adventure</h1>
            <h2 style={{color:styles.colors.white,fontSize:'1em'}}>U.S. National Parks Finder</h2>
        </div>
        <div className="row">
            <Content style={styles}/>
        </div>

        <div className="row">
            <div className="col-12 text-center" style={{}}>
                <cite style={{color:styles.colors.white, fontSize:'.7em'}}>
                    Images by <a href="https://www.nps.gov" target="_blank" rel="noopener noreferrer">NPS.GOV</a></cite>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
