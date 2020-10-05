import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import * as todosActions from "../redux/actions/todosActions"
import { todosReducer } from '../redux/reducers/todosReducer';

class Form extends Component {

    componentDidMount() {
        console.log(this.props.actions.addTodo())
    }
    
    state = {
        inputtext:""
    }

    inputOnChange = (e) => {
        this.setState({
            inputtext: e.target.value
        })
    }

    inputReset = () => {
        this.setState({inputtext:''})
    }
    render() {
        
        return (
            <div>
                <form action="#">
                    <input value ={this.state.inputtext} type="text" placeholder="New Task" onChange={(e) => {this.inputOnChange(e)}}/>
                    <button type="submit" onClick={(e) => (this.props.actions.addTodo(e, this.state.inputtext), this.setState({inputtext:''}))}><strong>ADD</strong></button>
                </form>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         inputvalue:state.inputOnChangeReducer
//     }
// }

function mapDispatchToProps(dispatch){
return{
    actions:{
        addTodo:bindActionCreators(todosActions.addTodo,dispatch)
    }
}
}

export default connect(mapDispatchToProps)(Form)


