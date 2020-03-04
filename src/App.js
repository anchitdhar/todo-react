import React from "react"
import "./style.css"
import todoData from "./components/todoData"
import TodoItem from "./components/TodoItem"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const TodoItm = this.state.todos.map(item => <TodoItem key={item.id} item={item}
      handleChange={this.handleChange}/>)
    return (
      <div className="items">
         { TodoItm }
      </div>
    )
  }
}

export default App