import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editDone } from '../actions';
import '../../public/style.css';

class EditTodoForm extends Component {
  state = {
    input: this.props.todo.title
  }

  render() {
    if (!this.props.isEdit) {
      return (
        <div></div>
      )
    } else {
      return (
        <form onSubmit={e => {
          e.preventDefault();
          this.props.editDone(this.props.todo, this.state.input);
        }}>
          <input 
            type='text' 
            value={this.state.input}
            onChange={e => {
              e.preventDefault();
              this.setState({ input: e.target.value });
            }}
          />
          <input type="submit" value='Done' />
        </form>
      )
    }
  }
} 

const mapDispatchToProps = dispatch => ({
  editDone: (todo, input) => dispatch(editDone(todo, input))
});

export default connect(null, mapDispatchToProps)(EditTodoForm);