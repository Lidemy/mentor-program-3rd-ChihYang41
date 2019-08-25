import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
  }

  delete = () => {
    const { todo, deleteTodo } = this.props
    deleteTodo(todo.id)
  }

  complete = () => {
    const { todo, completeTodo } = this.props
    completeTodo(todo.id)
  }

  render() {
    const { todo } = this.props
    return (
      <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.isCompleted ? 'list-group-item-success' : ''}`}>
        <p>{todo.content}</p>
        <div className="button-container">
          <button className="todo-delete btn btn-dark" onClick={this.delete}>刪除</button>
          <button className="todo-complete btn btn-dark" onClick={this.complete}>完成</button>
        </div>
      </li>
    )
  }
}

export default Todo;
