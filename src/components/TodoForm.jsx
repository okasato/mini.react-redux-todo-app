import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, updateItem } from '../actions';
import '../../public/style.css';

class TodoForm extends Component {
  state = {
    item: ''
  }

  render() {
    return (
      <form onSubmit={event => {
        event.preventDefault();
        this.props.addTodo(this.state.item);
      }}>
        <input 
          type='text'
          // value={this.props.item} 
          onChange={event => {
            event.preventDefault();
            this.setState({ item: event.target.value });
          }}/>
        <input type="submit" value='Add' />
      </form>
    )
  }  
}

const mapStateToProps = state => ({ item: state.item });
const mapDispatchToProps = dispatch => ({
  addTodo: item => dispatch(addTodo(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
