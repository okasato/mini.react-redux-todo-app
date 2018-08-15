import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../public/style.css';
import EditTodoForm from './EditTodoForm';
import { checkTodo, deleteTodo, editTodo} from '../actions';

class TodoItem extends Component {

  render() {
    return (
      <li key={this.props.todo.id}>
        <label>
          <input type="checkbox"
            checked={this.props.todo.isDone}
            onChange={this.props.checkTodo(this.props.todo)}
          />
        </label>
        {/* <span className={this.props.todo.isDone ? 'done' : ''}>        
          {this.props.todo.title}
        </span>
        <span className='cmd'>[x]</span> */}
        {/* <button className='cmd' 
          onClick={this.props.deleteTodo(this.props.todo)}>[x]</button> */}
        {/* <button onClick={this.props.editTodo(this.props.todo)}>Edit</button> */}
        {/* <EditTodoForm
          todo={this.props.todo}
        /> */}
      </li>
    )
  }
}

// const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = dispatch => ({
  checkTodo: todo => dispatch(checkTodo(todo)),
  // deleteTodo: todo => dispatch(deleteTodo(todo)),
  // editTodo: todo => dispatch(editTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoItem);
