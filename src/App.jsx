import React, { Component } from 'react';
import Todolist from './TodoList';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';

export default class App extends Component {  
  state = {
    todos: [],
    item: ''
  }

  checkTodo = todo => {
    const todos = JSON.parse(JSON.stringify(this.state.todos));
    const position = todos.map(todo => todo.id).indexOf(todo.id);
    
    todos[position].isDone = !todos[position].isDone;
    this.setState({ 
      todos
    });
  }

  deleteTodo = todo => {
    if (!confirm('are you sure?')) {
      return;
    }
    const todos = JSON.parse(JSON.stringify(this.state.todos));
    const position = this.state.todos.indexOf(todo);

    todos.splice(position, 1);
    this.setState({
      todos
    });
  }

  updateItem = event => {
    this.setState({
      item: event.target.value
    });
  }

  getUniqueId = () => {
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
  }

  addTodo = event => {
    event.preventDefault();

    if (this.state.item.trim() === '') {
      return;
    }

    const item = {
      id: this.getUniqueId(),
      title: this.state.item,
      isDone: false
    };
    const todos = JSON.parse(JSON.stringify(this.state.todos));    
    todos.push(item);
    this.setState({
      todos,
      item: ''
    });
  }

  perge = () => {
    if (!confirm('are you sure?')) {
      return;
    }

    const todos = this.state.todos.filter(todo => {
      return !todo.isDone;
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className='container'>
        <TodoHeader
          todos={this.state.todos}
          perge={this.perge}
        />
        <Todolist 
          todos={this.state.todos}
          checkTodo={this.checkTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoForm
          item={this.state.item}
          updateItem={this.updateItem}
          addTodo={this.addTodo}
        />
      </div>
    )
  }
} 