import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { getList } from '../actions';
import '../../public/style.css';

class TodoList extends Component {

  render() {
    console.log('todos', this.props.todos, this.props.todos.length);
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
const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
