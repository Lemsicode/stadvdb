import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import uniqid from 'uniqid';

export default function Top10MoviesAllTime() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/GET/top-10-movies-all-time').then((response) => {
      setDataList(response.data);
    });
  }, [])

  return(
    <div className="table-container section" id="top-10-movies-all-time">
      <h1 className='table-title'>Top 10 Movies of All Time according to IMDB</h1>
      <table>
        <tbody>
        <tr>
          <th>Movies</th>
          <th>Year</th>
          <th>Rank</th>
        </tr>
        {
          dataList.map(val => {
            return(
              <tr key={uniqid()}>
                <td>{val.movie_name}</td>
                <td>{val.movie_year}</td>
                <td>{val.movie_rank}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <br/><br/>
      <span>*10 being the highest rank while 1 is the lowest rank</span>
    </div>
  )
}