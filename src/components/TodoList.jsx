import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends Component {

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
              />
            )
          })}
        </ul>
      )
    }
  }
}

const mapStateToProps = state => ({ todos: state.todos });

export default connect(mapStateToProps, null)(TodoList);
