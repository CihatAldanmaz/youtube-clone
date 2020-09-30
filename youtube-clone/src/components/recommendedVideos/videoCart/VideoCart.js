import React from 'react'
import "./videoCart.css"

function VideoCart(props) {
    const {img,title,channel_name,view_number,publish_time} = props.video
    console.log(img)
    return (
        <div className="videocart">
        <img src={img} alt="" srcset=""/>
        <div className="bottom">
            <div className="title">{title}</div>
            <div className="channel-name">{channel_name}</div>
            <div className="view-number">{view_number}</div>
            <div className="publish-time">{publish_time}</div>
        </div>
        </div>
    )
}

export default VideoCart
