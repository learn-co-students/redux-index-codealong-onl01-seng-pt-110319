import React from 'react'

const Todo = props => {
    return (
        <div>
            <ul>
                <li>{props.text}</li>
            </ul>
        </div>
    )
}

export default Todo