import React, { Component } from 'react';
import $ from 'jquery';
export default class Infos extends Component{
    constructor(props){
        super(props);
        this._toggleDiv = this._toggleDiv.bind(this);
       
    }
    _toggleDiv() {
        $(this.refs['toggle-div']).slideToggle()
    }
    render(){
        return(
            <div id="btnInfos">
                <i className="fa fa-info-circle fa-3x app-info app-float-right app-legend-icon" aria-hidden="true" onClick={this._toggleDiv}></i>    
                <div id="detailsContainer" ref="toggle-div" className="card app-card-margin app-card-position app-card-visibility">
                    <div className="card-body">
                        <h4 className="card-title">Vue d'ensemble</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Progression globale :</h6>
                        <br/>
                        
                        <p className="card-text">
                            <span>In progress :  </span><span className="badge badge-info app-bg-blue">3</span>
                        </p>
                        <p className="card-text">
                            <span>Done :  </span><span className="badge badge-info app-bg-green">3</span>
                        </p>
                        <p className="card-text">
                            <span>Archived :  </span><span className="badge badge-info app-bg-grey">3</span>
                        </p>
                        <p className="card-text">
                            <span>Deleted :  </span><span className="badge badge-info app-bg-red">3</span>
                        </p>

                    </div>
                </div>  
            </div>  
        );
    }
}