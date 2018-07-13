import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Todo from './Todo';
import Accordion from './Accordion';
import Infos from './Infos';
import Details from './Details';

class App extends Component {
  
  constructor(){
    super();
    const storedTodos = localStorage.getItem('data');
  
    this.state = {
      todos:["tache 1","tache 2","tache 3","tache 4"]
      //todos:JSON.parse(savedTasks)
    }
  }
  
  addTodo(){
    let todoValue = this.todoInput.value;
    let newTodos = this.state.todos;
    //verifier si la todo n'est pas vide
    let alertMsgContent = $('#alertContainer').text();
    if(todoValue!==undefined && todoValue!==""){
      newTodos.push(todoValue);
      this.setState({
        todos: newTodos
      });
      //localStorage.setItem("data",JSON.stringify(newTodos)); 
      $('#alertContainer').empty();
    //Si todo vide on affiche un message d'erreur  
    }else{
      if(!alertMsgContent){
        $("#alertContainer").prepend('<div class="alert alert-danger">Ajouter une todo non vide</div>');
      }else{
        //Reset error msg if new todo is not empty
        $('#alertContainer').empty()
        .prepend('<div class="alert alert-danger">Ajouter une todo non vide</div>');
      }  
    }
    //Reset Value
    this.todoInput.value = "";
    //Set focus to input
    this.todoInput.focus();
  }
  removeTodo(id) {
    let todos = this.state.todos.filter((todo,index)=>{
      return id !== index;
    });
    this.setState({
      todos : todos
    });
    //localStorage.setItem("data",JSON.stringify(todos));
  }
  render() {
    return (
      <div className="text-center">
        <h1>React Todo</h1>
        <p>Todo's count : <span className="badge badge-info app-bg-blue">{this.state.todos.length}</span></p>
        
        <div className="input-group w-25">
          <input className="form-control" type="text" placeholder="enter todo" ref={(input) => this.todoInput = input} />
          <span className="input-group-btn">
            <button className="btn btn-primary app-bg-blue" onClick={this.addTodo.bind(this)}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
          </span>
        </div>
        <Accordion/>
        <div id="alertContainer"></div>
        <ul className="list-group">
          {this.state.todos.map((todo,index) => {
            return (<Todo key={index} todo ={todo} onRemove = {() => this.removeTodo(index)}/>)
          })}
        </ul>
        <Infos/>
        <Details/>
      </div>
      
    );
  }
}
export default App;
