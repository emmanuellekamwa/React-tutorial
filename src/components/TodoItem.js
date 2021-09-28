import React from "react"

function TodoItem(props) {
    return (
        <li>
          <input type="checkbox" 
          checked={props.todo.completed}  
          onChange={() => console.log("clicked")}/> 
          <button onClick={() => props.deleteTodoProps(props.todo.id)}>
                Delete
           </button>
          {props.todo.title}
        </li>
    )
}

export default TodoItem