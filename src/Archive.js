import React, {Component} from 'react';

export default class Archive extends Component{
    
    render(){
        let {id, todo} = this.props;
        return(
            <button className="btn btn-light app-float-right app-btn-size rounded-circle">
                <i className="fa fa-archive" aria-hidden="true"></i>
            </button>
        );
    }
}