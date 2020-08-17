import React from 'react'

const Todo = props => {
    return (
        <li>{props.text}</li>
    )
}

export default Todo

// Creating a Presentational Todo Component
// each todo rendered as a list item
// functional component that returns an li displaying props: