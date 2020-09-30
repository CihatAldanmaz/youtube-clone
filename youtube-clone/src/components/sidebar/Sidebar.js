import React, { Component } from 'react'
import "./sidebar.css"
import SideBarRow from "./sidebarRow/SideBarRow"
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

       
export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <SideBarRow Icon={HomeIcon} title="Home"/>
                <SideBarRow Icon={SubscriptionsIcon} title="Subscription"/>
                <SideBarRow Icon={WhatshotIcon} title="Trending"/>
                <hr />
                <SideBarRow Icon={VideoLibraryIcon} title="Library"/>
                <SideBarRow Icon={HistoryIcon} title="History"/>
                <SideBarRow Icon={OndemandVideoIcon} title="Your Videos"/>
                <SideBarRow Icon={WatchLaterIcon} title="Watch Later"/>
                <SideBarRow Icon={ThumbUpIcon} title="Liked Videos"/>
                <SideBarRow Icon={ExpandMoreIcon} title="Show more"/>
            </div>
        )
    }
}
