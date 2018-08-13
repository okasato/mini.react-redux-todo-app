import React, { Component } from 'react';
import { connect } from 'react-redux';
import { perge } from '../actions';

class TodoHeader extends Component {

  render() {
    return (
      <h1>
        <button onClick={this.props.perge}>Purge</button>
        My Todos
        <span>({this.props.todos.filter(todo => {
          return !todo.isDone;
          }).length}/{this.props.todos.length})</span>
      </h1>
    )
  }
}

const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = dispatch => ({
  perge: () => dispatch(perge())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);
