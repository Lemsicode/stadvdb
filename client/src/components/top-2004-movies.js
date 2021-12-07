import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import uniqid from 'uniqid';

export default function Top2004Movies() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/GET/top-2004-movie').then((response) => {
      setDataList(response.data);
    });
  }, [])
  return(
    <div className="table-container section" id='top-2004-movies'>
      <h1 className='table-title'>Top 10 Movies in 2004 according to IMDB</h1>
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
                <td>{val.Movie}</td>
                <td>{val.Rank}</td>
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