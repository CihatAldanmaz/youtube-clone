import React, { Component } from 'react'
import Form from './Form'
import TodoContainer from './TodoContainer'
import "./style/style.css"
export default class Dashboard extends Component {

    state = {
        todos:[],
        todos1:["react", "js", "ruby"]
    }

    componentDidMount() {
   
    }


    //Handlers
    handleAddButton = (e, input) => {
        e.preventDefault()
       let indexnumber = this.state.todos.length - 1
        let newInput = {
            userId:1,
            id:indexnumber,
            title:input
        }
        this.setState({
            todos: [newInput, ...this.state.todos]
        })
        fetch('https://jsonplaceholder.typicode.com/users/1/todos/posts', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({input})
          })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
    }

  
    deleteToDo = (arg) => {
        let filteredArray = this.state.todos.filter(todo => todo.title !== arg)
        this.setState({
            todos:filteredArray
        })
    }
    
    render() {
        return (
            <main>
                <h1>TO-DO LIST</h1>
                <Form handleAddButton = {this.handleAddButton}/>
                <TodoContainer deleteToDo={this.deleteToDo}/>
            </main>
        )
    }
}
