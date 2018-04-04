import React, {Component} from 'react';

class Result extends Component{
    render(){
        return(
            <div
                className="row"
                style={{
                    width: '200px',
                    height:'200px',
                    background:"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)), "
                    + "url("
                    + this.props.img
                    +")0% 0% / auto 200px no-repeat",
                    backgroundSize:'100% 100%',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center bottom',
                    position:'relative',
                    margin:'10px',
                    paddingTop:'30px'
                }}>
                <div
                    className="col-12 text-center"
                    style={{
                        color:this.props.style.colors.white
                    }}>
                    <h5
                        dangerouslySetInnerHTML={{
                            __html: this.props.name
                        }}
                        style={{
                            fontSize:'1em'
                        }}
                    />
                </div>
                <div
                    className="col-12"
                    style={{
                        backgroundColor:this.props.style.colors.opaqueWhite,
                        color:this.props.style.colors.darkGrey,
                        padding:'10px',
                        position:'absolute',
                        bottom:'0',
                        alignItems:'center'
                    }}>
                    <h6
                        style={{
                            fontSize:'.7em',
                            margin:'0',
                            overflowWrap:'break-word'
                        }}>
                        {this.props.location.replace(/,/g, ', ')}
                    </h6>
                </div>
            </div>
        );
    }
}

export default Result;