import React from 'react'
import './sidebar.css'
import {MdOutlineLineStyle, MdTimeline, MdTrendingUp} from 'react-icons/md'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MdOutlineLineStyle />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <MdTimeline />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <MdTrendingUp />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdOutlineLineStyle />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <MdTimeline />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <MdTrendingUp />
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
