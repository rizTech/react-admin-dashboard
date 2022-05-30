import React from 'react'
import './widgetSm.css'
import AVTR from '../../assets/avatar.png'
import {MdOutlineVisibility} from 'react-icons/md'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Joined Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={AVTR} alt="user icon" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Rizwn Khan</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
                    <MdOutlineVisibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={AVTR} alt="user icon" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Rizwn Khan</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
                    <MdOutlineVisibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={AVTR} alt="user icon" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Rizwn Khan</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
                    <MdOutlineVisibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={AVTR} alt="user icon" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Rizwn Khan</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
                    <MdOutlineVisibility className="widgetSmIcon" />
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
