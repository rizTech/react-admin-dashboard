import React from 'react'
import './sidebar.css'
import {MdOutlineLineStyle, MdTimeline, MdTrendingUp, MdStore, MdOutlineFeedback, MdWorkOutline, MdReport} from 'react-icons/md'
import {AiOutlineUser, AiOutlineTransaction, AiOutlineMail} from 'react-icons/ai'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {BiMessage} from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to='/' className='link'>
                        <li className="sidebarListItem active">
                            <MdOutlineLineStyle className="sidebarIcons"/>
                            Home
                        </li>
                    </Link>
                    <Link to='/analytics' className='link'>
                        <li className="sidebarListItem">
                            <MdTimeline className="sidebarIcons" />
                            Analytics
                        </li>
                    </Link>
                    <Link to='/sales' className='link'>
                        <li className="sidebarListItem">
                            <MdTrendingUp className="sidebarIcons" />
                            Sales
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to='/users' className='link'>
                        <li className="sidebarListItem">
                            <AiOutlineUser />
                            Users
                        </li>
                    </Link>
                    <Link to='/products' className='link'>
                        <li className="sidebarListItem">
                            <MdStore />
                            Products
                        </li>
                    </Link>
                    <Link to='/transactions' className='link'>
                        <li className="sidebarListItem">
                            <AiOutlineTransaction />
                            Transactions
                        </li>
                    </Link>
                    <Link to='/reports' className='link'>
                        <li className="sidebarListItem">
                            <HiOutlineDocumentReport />
                            Reports
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <AiOutlineMail />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlineFeedback />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <BiMessage />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdWorkOutline />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <MdTimeline />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <MdReport />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
