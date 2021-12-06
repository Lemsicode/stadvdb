import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function HighestRatedGenresAllTime() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/GET/highest-rated-genres').then((response) => {
      setDataList(response.data);
    });
  }, [])

  return (
    <div className="hi-genre-2000 section">
      <div>
        <h1 className='graph-title'>Highest Rated Genre of All Time according to IMDB</h1>
          <BarChart width={1870} height={350} data={dataList}>
            <CartesianGrid strokeDasharray="3 3" stroke='black'/>
            <XAxis dataKey='Genre'/>
            <YAxis dataKey='Rank' />
            <Tooltip />
            <Legend />
            <Bar dataKey='Rank' fill="#f6c700" />
          </BarChart>
      </div>
    </div>
  );
}
