import React from 'react'
import './chart.css'
import { LineChart, XAxis, ResponsiveContainer, Line, CartesianGrid, Legend, Tooltip } from 'recharts';

export default function Chart() {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          "Active User": 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          "Active User": 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          "Active User": 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          "Active User": 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          "Active User": 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          "Active User": 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Aug',
            "Active User": 4490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Sep',
            "Active User": 1490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Oct',
            "Active User": 3090,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Nov',
            "Active User": 2390,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Dec',
            "Active User": 4190,
            pv: 4300,
            amt: 2100,
          },
      ];

  return (
    <div className='chart'>
        <h3 className='chartTitle'>Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#5550bd" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
