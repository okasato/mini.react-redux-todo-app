import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TodoList from './TodoList';
// import TodoForm from './TodoForm';
// import TodoHeader from './TodoHeader';
import '../../public/style.css';
import { addTodo, deleteTodo } from '../actions';

class App extends Component {  
  state = {
    input: ''
  }

  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li key={todo}>
                <span>{todo}</span>
                <button onClick={() => this.props.deleteTodo(todo)}>[x]</button>
              </li>
            )
          })}
        </ul>
        {/* <input type='text' onChange={e => this.setState({ input: e.target.value })}/>
        <button onClick={() => this.props.addTodo(this.state.input)}>Add</button> */}
        
        <form onSubmit={e => {
          e.preventDefault();
          this.props.addTodo(this.state.input);
        }}>
          <input 
            type='text'
            onChange={e => {
              e.preventDefault();
              this.setState({ input: event.target.value });
            }}/>
          <input type="submit" value='Add' />
        </form>
        {/* <TodoHeader />
        <TodoList />
        <TodoForm /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return { todos: state.todos }
};
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
