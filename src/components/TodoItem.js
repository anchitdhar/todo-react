import React from "react"

function TodoItem(props) {
    return (
        <div className="list">
            <input type="checkbox" />
            <p> {props.item.text} </p>
            <hr/>
        </div>
    )
}

export default TodoItem