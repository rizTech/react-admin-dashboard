import React from 'react'
import './featuredInfo.css'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2.41</span>
                <span className="featuredMoneyRate">
                    -11.4
                    <AiOutlineArrowDown className='featuredIcon negetive'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">
                Sales
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4.415</span>
                <span className="featuredMoneyRate">
                    -1.4
                    <AiOutlineArrowDown className='featuredIcon negetive'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">
                Cost
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">
                    +2.4
                    <AiOutlineArrowUp className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
