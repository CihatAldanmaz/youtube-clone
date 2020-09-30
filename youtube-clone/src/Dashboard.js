import React, { Component } from 'react'
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import RecommendedVideos from './components/recommendedVideos/RecommendedVideos';


export default class Dashboard extends Component {

    state = {
        videos: [{
            img: "https://i.ytimg.com/an_webp/nKgTvJgQxPE/mqdefault_6s.webp?du=3000&sqp=CKm4z_sF&rs=AOn4CLCI7rxtsL01UWd2RVrGinNIPNb4cA",
            title: "Türkiye Avustralya 4 çeyrek full kayıt",
            channel_name: "Tobias",
            view_number: "62K",
            publish_time: "2 years ago"
        }]
    }


    render() {
        return (
            <div>
                <Header />
                <div className="app-page">
                    <Sidebar />
                    <RecommendedVideos videos={this.state.videos}/>
                </div>
            </div>
        )
    }
}
