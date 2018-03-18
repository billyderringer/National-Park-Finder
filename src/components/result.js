import React, {Component} from 'react';
import './result.css';

class Result extends Component{
    render(){
        return(
            <div className="park-image row" style={{width:'150px', height:'150px',
                margin:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className="col-12 text-center">
                    <h6>Grand Teton National Park</h6>
                </div>
                <div className="col-12 text-center">
                    <h6 style={{fontSize:'.9em'}}>Wyoming</h6>
                </div>
            </div>
        );
    }
}

export default Result;