import React, { Component } from 'react';

export default class EditTodoForm extends Component {
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
        <form onSubmit={() => this.props.editDone(this.props.todo, this.state.currentItem)}>
          <input type='text' value={this.state.currentItem} onChange={this.editItem}/>
          <input type="submit" value='Done' />
        </form>
      )
    }
  }
} 