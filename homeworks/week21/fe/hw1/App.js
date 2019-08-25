import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import Todo from './todo.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      todoText: '',
    }
    this.id = 1;
  }

  componentDidMount() {
    const todoData = window.localStorage.getItem('todoApp');
    if (todoData) {
      const oldData = JSON.parse(todoData);
      this.setState({
        todos: oldData
      })
      this.id = oldData[oldData.length - 1].id + 1;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      window.localStorage.setItem('todoApp', JSON.stringify(this.state.todos))
    }
  }

  handleChange = (e) => {
    this.setState({
      todoText: e.target.value
    })
  }

  addTodo = () => {
    const { todoText, todos } = this.state
    this.setState({
      todos: [...todos, {
        id: this.id,
        content: todoText,
        isCompleted: false
      }],
      todoText: ''
    })
    this.id++
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  completeTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      })
    })
  }

  render() {
    const { todos, todoText } = this.state
    return (
      <div className="wrapper">Ó
        <ul className="list-group">
          <h1 className="todo-title">
            todo list
          </h1>
          <li className="input-container">
            <div className="row">
              <input type="text" className="todo-input-text" value={todoText} onChange={ this.handleChange }/>
              <button className="todo-input-button btn btn-light" onClick={ this.addTodo }>新增</button>
            </div>
          </li>
          <div className="todo-list">
            {todos.map(todo => (
              <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
              ))}
          </div>
        </ul>
      </div>
    )
  }
}

export default App;
