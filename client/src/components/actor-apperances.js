import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import uniqid from 'uniqid';

export default function ActorAppearances() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/GET/actor-appearances').then((response) => {
      setDataList(response.data);
    });
  }, [])

  return(
    <div className="table-container section" id="actor-appearances">
      <h1 className='table-title'>Actors with Most Appearances according to IMDB</h1>
      <table>
        <tbody>
        <tr>
          <th>Actors</th>
          <th>Gender</th>
          <th>Count</th>
        </tr>
        {
          dataList.map(val => {
            return(
              <tr key={uniqid()}>
                <td>{val.first_name} {val.last_name}</td>
                <td>{val.gender}</td>
                <td>{val.count} times</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}