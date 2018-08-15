import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import '../../public/style.css';
import { deleteTodo, checkTodo } from '../actions';

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
              <li key={todo.id}>
                <label>
                  <input type="checkbox"
                    checked={todo.isDone}
                    onChange={() => this.props.checkTodo(todo)}
                  />
                </label>
                <span className={todo.isDone ? 'done' : ''}>
                  {todo.title}
                </span>
                <span className='cmd'
                  onClick={() => this.props.deleteTodo(todo)}>[x]</span>
              </li>
            )
          })}
        </ul>
      )
    }
  }
}

const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = dispatch => ({
  deleteTodo: todo => dispatch(deleteTodo(todo)),
  checkTodo: todo => dispatch(checkTodo(todo))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
