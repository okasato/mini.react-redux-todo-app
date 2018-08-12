import React, { Component } from 'react';

export default class TodoHeader extends Component {

  render() {
    return (
      <h1>
        <button onClick={this.props.perge}>Purge</button>
        My Todos
        <span>({this.props.todos.filter(todo => {
          return !todo.isDone;
          }).length}/{this.props.todos.length})</span>
      </h1>
    )
  }
} 