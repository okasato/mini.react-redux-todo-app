import React, { Component } from 'react';

export default class TodoForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input type='text' value={this.props.item} onChange={this.props.updateItem}/>
        <input type="submit" value='Add' />
      </form>
    )
  }
  
} 