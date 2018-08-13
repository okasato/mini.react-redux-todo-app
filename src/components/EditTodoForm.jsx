import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editDone } from '../actions';

class EditTodoForm extends Component {
  state = {
    currentItem: this.props.todo.title
  }

  editItem = event => {
    event.preventDefault();

    this.setState({
      currentItem: event.target.value
    });
  }

  render() {
    if (!this.props.todo.isEdit) {
      return (
        <div></div>
      )
    } else {
      return (
        <form onSubmit={event => {
          event.preventDefault();
          this.props.editDone(this.props.todo, this.state.currentItem);
        }}>
          <input 
            type='text' 
            value={this.state.currentItem} 
            onChange={this.editItem}
          />
          <input type="submit" value='Done' />
        </form>
      )
    }
  }
} 

const mapDispatchToProps = dispatch => ({
  editDone: (todo, item) => dispatch(editDone(todo, item))
});

export default connect(null, mapDispatchToProps)(EditTodoForm);