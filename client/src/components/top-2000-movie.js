import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import uniqid from 'uniqid';

export default function Top2000Movies() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/query').then((response) => {
      setDataList(response.data);
    });
  }, [])
  return(
    <div className="table-container section">
      <h1 className='table-title'>Top Movies in 2000</h1>
      <table>
        <tbody>
        <tr>
          <th>Rank</th>
          <th>Movies</th>
        </tr>
        {
          dataList.map(val => {
            return(
              <tr key={uniqid()}className='row'>
                <td>{val.rank}</td>
                <td>{val.genre}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}