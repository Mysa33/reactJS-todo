import React, { Component } from 'react';
export default class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true,isToggleClassCss:true};
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        isToggleClassCss:!prevState.isToggleClassCss
      }));
    }
    render() {
      return (
        <button className={this.state.isToggleClassCss ? 'btn btn-light app-btn-size app-bg-blue' : 'btn btn-success app-btn-size'} onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Progress' : 'Done'}
        </button>
      );
    }
  }