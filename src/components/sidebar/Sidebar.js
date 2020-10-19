import React, { Component } from 'react'
import "./sidebar.css"
import SideBarRow from "./sidebarRow/SideBarRow"
import HomeIcon from "@material-ui/icons/Home";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import PetsIcon from '@material-ui/icons/Pets';
import DuoIcon from '@material-ui/icons/Duo';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import {Link} from "react-router-dom";

       
export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                
                <SideBarRow Icon={HomeIcon} title="Home" categoryId={0} categoryVideos={this.props.categoryVideos}/>
                <SideBarRow Icon={SportsEsportsIcon} title="Gaming" categoryId={20} categoryVideos={this.props.categoryVideos}/>
                <SideBarRow Icon={DuoIcon} title="Comedy" categoryId={23} categoryVideos={this.props.categoryVideos}/>
                <SideBarRow Icon={SportsFootballIcon} title="Sports" categoryId={17} categoryVideos={this.props.categoryVideos}/>
                <hr />
                <SideBarRow Icon={PetsIcon} title="Pets&Animals" categoryId={15} categoryVideos={this.props.categoryVideos}/>
                <SideBarRow Icon={DriveEtaIcon} title="Auto" categoryId={2} categoryVideos={this.props.categoryVideos}/>
                <SideBarRow Icon={LocalMoviesIcon} title="Film & Animation" categoryId={1} categoryVideos={this.props.categoryVideos}/>
                <SideBarRow Icon={SlideshowIcon} title="Reality Show" categoryId={24} categoryVideos={this.props.categoryVideos}/>
                <SideBarRow Icon={AnnouncementIcon} title="News" categoryId={25} categoryVideos={this.props.categoryVideos}/>
               
            </div>
        )
    }
}
