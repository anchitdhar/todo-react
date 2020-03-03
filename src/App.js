import React from "react"
import "./style.css"
import todoData from "./components/todoData"
import TodoItem from "./components/TodoItem"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos:todoData
    }
  }
  render() {
    const TodoItm=this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
    return (
      <div className="items">
         { TodoItm }
      </div>
    )
  }
}

export default App