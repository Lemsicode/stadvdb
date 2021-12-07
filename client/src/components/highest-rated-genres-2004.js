import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function HighestRatedGenres2004() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/GET/highest-rated-genres-2004').then((response) => {
      setDataList(response.data);
    });
  }, [])

  return (
    <div className="hi-genre-2000 section" id="highest-rated-genres-2004">
      <div>
        <h1 className='graph-title'>Highest Rated Genres in 2004 (Average) according to IMDB</h1>
          <BarChart width={1770} height={350} data={dataList}>
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
