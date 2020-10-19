import React, { Component } from 'react'
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import RecommendedVideos from './components/recommendedVideos/RecommendedVideos';
import PlayVideo from "./components/recommendedVideos/videoCart/playVideo/PlayVideo"
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class Dashboard extends Component {
    
    API_KEY=""
   
    state = {
        ytvideos: [],
        playvideo:{},
        searchquery:"",
        headline:"Trends"
    }

    popularVideos = (() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${this.API_KEY}`)
            .then(resp => this.setState({
                ytvideos: resp.data.items
            }))
    })

 
    handleSearchQuery = (e) => {
        this.setState({
            searchquery:e.target.value
        })
            }

    searchVideos = (e) => {
        e.preventDefault()
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchquery}&key=`)
            .then(resp => this.setState({
                ytvideos: resp.data.items
            }))
    }

    categoryVideos = (categoryId,title) => {
        
        if(categoryId===0){
            this.popularVideos()
            this.setState({
                headline:"Trends"
            })
        }else{

           
            axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${this.API_KEY}`)
            .then(resp => this.setState({
                ytvideos:resp.data.items
            }))

            this.setState({
                headline:title
            })
        }
            }

    getVideoId = (e,video) => {
        this.setState({
            playvideo:video
        })
    }

    
    componentDidMount() {
        console.log(this.state.ytvideos)

        this.popularVideos()
    }



    render() {
        return (
            <div>
                <Header handleSearchQuery={this.handleSearchQuery} searchVideos={this.searchVideos}/>
                <div className="app-page">
                <Sidebar categoryVideos={this.categoryVideos}/>
                
                    <Switch>
                    <Route exact path="/">
                    <RecommendedVideos headline={this.state.headline} videos={this.state.videos} ytvideos={this.state.ytvideos} getVideoId={this.getVideoId}/>
                    </Route>
                   <Route exact path="/play">
                    <PlayVideo video={this.state.playvideo}/>
                   </Route>
                    </Switch>
               
                </div>

            </div>

        )
    }
}
