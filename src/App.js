import React, { useState } from "react"
import "./App.css";


function Todo({ todo, index }) {
  return (
    <div className="todo">
      { todo.text }
    </div>
  )
}


function App() {
  const [todos, setTodos] = useState([
    {
      text: "Build Todo React App",
      isCompleted: false
    },
    {
      text: "Go snowshoeing with Angel and Nasa",
      isCompleted: false
    },
    {
      text: "Feed Nasa dinner",
      isCompleted: false
    }
  ]); 

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}





export default App;
