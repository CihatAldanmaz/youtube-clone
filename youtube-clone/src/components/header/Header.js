import React, { Component } from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';



export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">   
               <MenuIcon />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1004px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo"></img>
               </div>
               
                <div className="header-search">
                    <input type="text" placeholder="Search..."/>
                    <button>
                        <SearchIcon className="search__icon"/>
                    </button>
                </div>

                <div className="header-right">
                    <VideoCallIcon className="right-ele"/>
                    <AppsIcon className="right-ele"/>
                    <NotificationsIcon className="right-ele"/>
                    <Avatar className="right-ele" />
                </div>
            </div>
        )
    }
}
