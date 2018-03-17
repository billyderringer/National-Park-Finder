import React, {Component} from 'react';
import Filters from "./filters";

class Content extends Component {

    render() {

        return (
            <div className="col-8 offset-2" style={{
                backgroundColor: this.props.style.colors.opaqueBlack, height: '65vh',
                padding: '50px 0 0 50px'
            }}>
                <div className="row">
                    <div className="col-3">
                        <Filters style={this.props.style}/>
                    </div>
                    <div className="col-9">

                    </div>
                </div>
            </div>
        );
    };
}

export default Content;