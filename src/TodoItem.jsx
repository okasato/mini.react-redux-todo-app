import React, { Component } from 'react';
import '../public/style.css';
import EditTodoForm from './EditTodoForm';

export default class TodoItem extends Component {

  render() {
    return (
      <li key={this.props.todo.id}>
        <label>
          <input type="checkbox"
            checked={this.props.todo.isDone}
            onChange={() => this.props.checkTodo(this.props.todo)}
          />
        </label>
        <span className={this.props.todo.isDone ? 'done' : ''}>        
          {this.props.todo.title}
        </span>
        <span className='cmd' 
          onClick={() => this.props.deleteTodo(this.props.todo)}>[x]</span>
        <button onClick={() => this.props.editTodo(this.props.todo)}>Edit</button>
        <EditTodoForm
          todo={this.props.todo}
          editDone={this.props.editDone}
        />
      </li>
    )
  }
} 