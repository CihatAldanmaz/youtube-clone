import React, { Component } from 'react'
import TodoCart from './TodoCart'

//Redux

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todosActions from "../redux/actions/todosActions"


class TodoContainer extends Component {

    helloWorld = () => {
        return {
           hello:"hello"
       }
    }

    componentDidMount() {
        this.props.actions.getTodos()
    }

 
    
    
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

function mapStateToProps(state){
    return{
        todos:state.todosReducer
    }
}

function mapDispatchToProps(dispatch){

    return {
        actions:{
            getTodos: bindActionCreators(todosActions.getTodos, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)