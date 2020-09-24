import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        inputtext:""
    }

    inputOnChange = (e) => {
        this.setState({
            inputtext: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form action="#">
                    <input type="text" placeholder="New Task" onChange={(e) => {this.inputOnChange(e)}}/>
                    <button type="submit" onClick={(e) => {this.props.handleAddButton(e, this.state.inputtext)}}><strong>ADD</strong></button>
                </form>
            </div>
        )
    }
}
