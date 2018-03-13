import React, { Component } from 'react';
import CompassIcon from './components/icon';
import StateSelector from './components/stateSelector'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location : 'Select State',
        };
    }

    changeLocation(location){
        this.setState({location: location});
    }
  render() {
    return (
      <div className="App container-fluid">
        <div className="text-center" style={{height:'30vh'}}>
            <CompassIcon width="60px" height="60px"/>
            <h1 style={{fontVariant:'small-caps',color:'#fff'}}>Find Your Adventure</h1>
            <h2 style={{color:'#fff',fontSize:'1.25em'}}>U.S. National Parks Finder</h2>
        </div>
        <div style={{height:'70vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <StateSelector handleChangeLocation={this.changeLocation.bind(this)} location={this.state.location}/>
        </div>


      </div>
    );
  }
}

export default App;
