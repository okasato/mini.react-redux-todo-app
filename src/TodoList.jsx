import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

  render() {
    if (this.props.todos.length <= 0) {
      return (
        <ul>
          <li>Nothing to do!</li>
        </ul>
      )
    } else {
      return (
        <ul>
          {this.props.todos.map(todo => {
            return (
              <TodoItem 
                todo={todo}
                checkTodo={this.props.checkTodo}
                deleteTodo={this.props.deleteTodo}
                editTodo={this.props.editTodo}
                // editItem={this.props.editItem}
                editDone={this.props.editDone}
              />
            )
          })}
        </ul>
      )
    }
  }
} 