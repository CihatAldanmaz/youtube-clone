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
        fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        .then(data => data.json())
        .then(data => {this.setState({
                todos:data
        })})
    }


    //Handlers
    handleAddButton = (e, input) => {
        e.preventDefault()

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
    
    render() {
        console.log(this.state.todos)
        return (
            <main>
                <h1>TO-DO LIST</h1>
                <Form handleAddButton = {this.handleAddButton}/>
                <TodoContainer todos = {this.state.todos}/>
            </main>
        )
    }
}
