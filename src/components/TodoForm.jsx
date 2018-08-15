import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import '../../public/style.css';

class TodoForm extends Component {
  state = {
    input: ''
  }

  render() {
    return (
      <form onSubmit={e => {
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
      </form>
    )
  }  
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
