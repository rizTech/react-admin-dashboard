import React from 'react'
import './widgetLg.css'
import AVTR from '../../assets/avatar.png'

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }


  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={AVTR} alt="User Icon" className="widgetLgImg" />
            <span className="widgetLgName">Susaan Carol</span>
          </td>
          <td className="widgetLgDate">02 June 2021</td>
          <td className="widgetLgAmount">$1222.00</td>
          <td className="widgetLgStatus">
            <Button type='Approved'/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={AVTR} alt="User Icon" className="widgetLgImg" />
            <span className="widgetLgName">Susaan Carol</span>
          </td>
          <td className="widgetLgDate">02 June 2021</td>
          <td className="widgetLgAmount">$1222.00</td>
          <td className="widgetLgStatus">
            <Button type='Declined'/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={AVTR} alt="User Icon" className="widgetLgImg" />
            <span className="widgetLgName">Susaan Carol</span>
          </td>
          <td className="widgetLgDate">02 June 2021</td>
          <td className="widgetLgAmount">$1222.00</td>
          <td className="widgetLgStatus">
            <Button type='Pending'/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={AVTR} alt="User Icon" className="widgetLgImg" />
            <span className="widgetLgName">Susaan Carol</span>
          </td>
          <td className="widgetLgDate">02 June 2021</td>
          <td className="widgetLgAmount">$1222.00</td>
          <td className="widgetLgStatus">
            <Button type='Approved'/>
          </td>
        </tr>
      </table>
    </div>
  )
}
