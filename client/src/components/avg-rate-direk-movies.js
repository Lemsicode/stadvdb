import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function AverageDirectorMovies() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/query').then((response) => {
      setDataList(response.data);
    });
  }, [])

  return (
    <div className="hi-genre-2000 section">
      <div>
        <h1>Average Rating of Directors' Movies</h1>
          <BarChart width={1570} height={350} data={dataList}>
            <CartesianGrid strokeDasharray="3 3" stroke='black'/>
            <XAxis dataKey='genre'/>
            <YAxis dataKey='rank' />
            <Tooltip />
            <Legend />
            <Bar dataKey='rank' fill="#f6c700" />
          </BarChart>
      </div>
    </div>
  );
}
