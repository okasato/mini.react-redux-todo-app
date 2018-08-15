import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import '../../public/style.css';
import { addTodo, deleteTodo } from '../actions';

class App extends Component {  

  render() {
    return (
      <div className='container'>
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </div>
    )
  }
}

export default connect(null, null)(App);
