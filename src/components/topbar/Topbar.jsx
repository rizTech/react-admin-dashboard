import React from 'react'
import './topbar.css'
import {IoMdNotificationsOutline} from 'react-icons/io';
import {MdLanguage} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'

//import AVTR from ''

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">ADMIN DASHBOARD</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <IoMdNotificationsOutline />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <MdLanguage />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <FiSettings />
                </div>
                <img src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg' alt="Avatar" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
