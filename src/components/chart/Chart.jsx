import React from 'react'
import './chart.css'
import { LineChart, XAxis, ResponsiveContainer, Line, CartesianGrid, Legend, Tooltip } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {
  return (
    <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
            {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf"/>}
                <XAxis dataKey="name" stroke="#5550bd" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
