import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import '../../public/style.css';
import { addTodo, deleteTodo } from '../actions';

class App extends Component {  
  // state = {
  //   input: ''
  // }

  render() {
    return (
      <div className='container'>
        {/* <ul>
          {this.props.todos.map(todo => {
            return (
              <li key={todo.id}>
                <span>{todo.title}</span>
                <button onClick={() => this.props.deleteTodo(todo)}>[x]</button>
              </li>
            )
          })}
        </ul> */}
        
        {/* <form onSubmit={e => {
          e.preventDefault();
          if (this.state.input.trim() === '') {
            return;
          }
          this.props.addTodo(this.state.input);
          this.setState({ input: '' });
        }}>
          <input 
            type='text'
            value={this.state.input}
            onChange={e => {
              e.preventDefault();
              this.setState({ input: event.target.value });
            }}/>
          <input type="submit" value='Add' />
        </form> */}
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { todos: state.todos }
// };
// const mapDispatchToProps = dispatch => ({
//   addTodo: todo => dispatch(addTodo(todo)),
//   deleteTodo: todo => dispatch(deleteTodo(todo))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(null, null)(App);
