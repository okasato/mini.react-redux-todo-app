import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, updateItem } from '../actions';
import '../../public/style.css';

class TodoForm extends Component {

  render() {
    return (
      <form onSubmit={event => {
        event.preventDefault();
        this.props.addTodo(event);
      }}>
        <input 
          type='text'
          value={this.props.item} 
          onChange={event => {
            event.preventDefault();
            this.props.updateItem(event);
          }}/>
        <input type="submit" value='Add' />
      </form>
    )
  }  
}

const mapStateToProps = state => ({ item: state.item });
const mapDispatchToProps = dispatch => ({
  updateItem: event => dispatch(updateItem(event)),
  addTodo: event => dispatch(addTodo(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
