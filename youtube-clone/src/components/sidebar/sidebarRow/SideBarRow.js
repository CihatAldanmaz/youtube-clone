import React, { Component } from 'react'
import "./sidebarrow.css"

export default class SideBarRow extends Component {
    render() {
        const {Icon,title} = this.props
        
        return (
            <div className="sideBarRow">
                <Icon className="icon"/>
                <h2>{title}</h2>
            </div>
        )
    }
}
