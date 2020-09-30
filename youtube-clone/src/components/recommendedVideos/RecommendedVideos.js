import React, { Component } from 'react'
import "./recommendedvideos.css"
import VideoCart from "./videoCart/VideoCart"
export default class RecommendedVideos extends Component {

    videosMapping = () => {
      return  this.props.videos.map((video) => {
       return     <VideoCart video={video}/>
        })
    }
    render() {
        return (
            <div className="recommendedvideos">
                {this.videosMapping()}
            </div>
        )
    }
}
