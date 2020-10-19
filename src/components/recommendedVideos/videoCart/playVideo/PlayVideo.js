import React, { Component } from "react";
import Iframe from "react-iframe";
import "./playvideo.css";
import { Link } from "react-router-dom";


export default class PlayVideo extends Component {

    state={
        videosnippet:[]
    }

    videourl = `https://www.youtube.com/embed/${this.props.video.id}`

videoMapping = () =>{
     console.log(this.props.video.snippet.title)
}

    componentWillMount() {
        this.videoMapping()

    }
    
    
  render() {
      console.log(this.state.videosnippet)
      const{statistics} = this.props.video
   const {snippet} = this.props.video
    return (
      <div className="playvideocomponent">
       
        <div className="videoplaytext">
    <h2>{snippet.title}</h2>
        </div>
       
        <Iframe
          url={this.videourl}
          width="1280px"
          height="740px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
        <div className="videobottom">
          <div className="videoinfo">
  <h2 className="view-date">{this.props.video.hasOwnProperty("statistics") ? statistics.viewCount : null} views ~ {snippet.publishedAt.slice(0,10)}</h2>
    <h2>Channel Name:{snippet.channelTitle}</h2>
          </div>

          <div className="likescount">
    <h2>Like:{this.props.video.hasOwnProperty("statistics") ? statistics.likeCount : null}</h2>
    <h2>Dislike:{this.props.video.hasOwnProperty("statistics") ? statistics.dislikeCount : null}</h2>
          </div>
        </div>
      </div>
    );
  }
}
