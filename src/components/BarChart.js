import React, { useState, useEffect } from "react";
import { BarChart, Bar, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";
import moment from 'moment'
import distribute from '../lib/distribute'
import colors from "../lib/colors";

export default function Chart({url}) {

  const [data, setData] = useState(null)
  const [keys, setKeys] = useState(null)
  const [cols, setCols] = useState(colors)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (data === null) {
      const fetchData = async () => {
        try {
          const res = await axios.get(url)
          setData(res.data.reverse())
          const ks = Object.keys(res.data[0]).filter(k => !k.includes('data') && !k.includes('total') && !k.includes('all'))
          setKeys(ks)
          setCols(distribute(colors, ks.length))
          setLoading(false)
        } catch (e) {
          console.log(e)
        }
      }
      fetchData()
    }
  }, [data, url])

  return (
    !loading &&
      <div>
        <ResponsiveContainer width="96%" height={360}>
          <BarChart data={data} margin={{top: 5, right: 30, left: 50, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="data" minTickGap={25} tickFormatter={timeStr => moment(timeStr).format('DD/MM/Y')} />
            <YAxis padding={{top: 100}} domain={['dataMin', 'dataMax']} />
            <Tooltip />
            <Legend />
            {
              keys.map((key, i) => (
                <Bar stackId="a" dataKey={key} fill={cols[i]} key={i} strokeWidth={2} dot={false}/>
              ))
            }
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
}