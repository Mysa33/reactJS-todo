import React, {Component} from 'react';
import Toggle from './Toggle';
import Archive from './Archive';

export default class Todo extends Component{
    
    render(){

        let {id, todo, onRemove} = this.props;
        return(
            <li key={todo.id} className="list-group-item app-task text-center">
                {todo} 
                <div className="app-float-right">
                    <Toggle />
                    <button className="btn btn-danger app-float-right app-btn-size rounded-circle" onClick={() => onRemove(id)}>
                        <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                    </button> 
                    <Archive/>
                </div> 
            </li>
        );
    }
}