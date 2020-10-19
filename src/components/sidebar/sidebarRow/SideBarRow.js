import React, { Component } from 'react'
import "./sidebarrow.css"
import { Link } from "react-router-dom";


export default class SideBarRow extends Component {
    render() {
        const {Icon,title} = this.props
        
        return (
            <div onClick={()=>{this.props.categoryVideos(this.props.categoryId,title)}}>
                <Link to="/" className="sideBarRow">
                <Icon className="icon"/>
                <h2>{title}</h2>
            </Link>
            </div>
        )
    }
}
