import React, { Component } from 'react'
import "./recommendedvideos.css"
import VideoCart from "./videoCart/VideoCart"


export default class RecommendedVideos extends Component {

    videosMapping = () => {
      return  this.props.videos.map((video) => {
       return     <VideoCart video={video}/>
        })
    }

    ytvideosMapping = () => {
        return  this.props.ytvideos.map((video) => {
         return     <VideoCart video={video} getVideoId={this.props.getVideoId}/>
          })
      }
    render() {
        console.log(this.props.ytvideos)
        return (
            <div className="recommendedvideos">
          
                <h2 className="headline">{this.props.headline}</h2>
                <div className="videosarea">

                {this.ytvideosMapping()}
                </div>
            </div>
          
        )
    }
}
