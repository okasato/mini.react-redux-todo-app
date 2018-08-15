import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../public/style.css';
import { deleteTodo, checkTodo, editTodo } from '../actions';
import EditTodoForm from './EditTodoForm';

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
                <button onClick={() => this.props.editTodo(todo)}>Edit</button>
                <EditTodoForm
                  todo={todo}
                  isEdit={todo.isEdit}
                />
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
  editTodo: todo => dispatch(editTodo(todo)),
  deleteTodo: todo => dispatch(deleteTodo(todo)),
  checkTodo: todo => dispatch(checkTodo(todo))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
