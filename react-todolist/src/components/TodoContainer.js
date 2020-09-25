import React, { Component } from 'react'
import TodoCart from './TodoCart'

export default class TodoContainer extends Component {

     todosMapping = () => {
         return this.props.todos.map((todo) => {
         return <TodoCart todo={todo} deleteToDo={this.props.deleteToDo}/>
     }
        )}


    render() {
         return (
            <div className="task-board">
                {/* <TodoCart /> */}
                <ul>
                 {this.todosMapping()}
                </ul>
            </div>
        )
    }
}
