import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import Todo from './Todo'


class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    // create varible, groab this.props.todos.map 
  render() {
      console.log(this.props.todos)
      return(
          <div>
             {this.renderTodos()}
          </div>
      )
  }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(TodosContainer);