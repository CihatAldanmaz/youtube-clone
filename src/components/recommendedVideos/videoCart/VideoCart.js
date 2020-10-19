// import React from 'react'
// import "./videoCart.css"
// import Avatar from '@material-ui/core/Avatar';

// function VideoCart(props) {
//     const {img,view_number,publish_time} = props.video
//     const {title,channelTitle,thumbnails} = props.video.snippet
//     return (
//         <div className="videocart">
//         <img src={thumbnails.medium.url} alt="" srcset=""/>
//         <div className="videocard__info">
//             <Avatar className="videoCart__avatar" alt={channelTitle} />
//            <div className="video-text">
//     <h4>{title}</h4>
//     <p>{channelTitle}</p>
//     <p>{view_number} - {publish_time}</p>
//            </div>
//         </div>
//         </div>
//     )
// }

// export default VideoCart

import React, { Component } from "react";
import "./videoCart.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export default class VideoCart extends Component {
  channelId = this.props.video.id.channelId;
  componentDidMount() {
    console.log(this.props.video)
  }
  
  render() {
    const { id, publish_time } = this.props.video;
    const { title, channelTitle, thumbnails } = this.props.video.snippet;
    return (
      <div className="videocart">
        <Link to="/play">
          {" "}
          <img
            src={thumbnails.medium.url}
            alt=""
            srcset=""
            onClick={(e) => {
              this.props.getVideoId(e, this.props.video);
            }}
          />
        </Link>

        <div className="videocard__info">
          <Avatar id="videoCart__avatar" alt={channelTitle}></Avatar>
          <div className="video-text">
            <h4>{title}</h4>
            <p>{channelTitle}</p>
            <p>
              {} - {publish_time}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
