import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import uniqid from 'uniqid';

export default function Top10MoviesWarGenre2004() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/GET/top-10-movies-war-genre-2004').then((response) => {
      setDataList(response.data);
    });
  }, [])
  return(
    <div className="table-container section">
      <h1 className='table-title'>Top 10 Movies under the War Genre in 2004 according to IMDB</h1>
      <table>
        <tbody>
        <tr>
          <th>Movies</th>
          <th>Rank*</th>
        </tr>
        {
          dataList.map(val => {
            return(
              <tr key={uniqid()}className='row'>
                <td>{val.movie_name}</td>
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
