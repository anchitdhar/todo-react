import React from "react"
import TodoItem from "./components/Checkbox.js"
import "./style.css"
import todoData from "./components/todoData"

function App() {
  const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="items">
      {todoItems}
    </div>
  )
 
}

export default App