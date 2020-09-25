import React, { Component } from 'react'

export default class TodoCart extends Component {
    render() {
        const {completed,title} = this.props.todo
        return (
            <div>
        <li><span class="delete" onClick={() => {this.props.deleteToDo(title)}}>x</span><input type="checkbox" checked={completed}/><label>{title}</label></li>
            </div>
        )
    }
}
