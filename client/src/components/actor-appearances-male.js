import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import uniqid from 'uniqid';

export default function ActorAppearancesMale() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/GET/actor-appearances-male').then((response) => {
      setDataList(response.data);
    });
  }, [])

  return(
    <div className="table-container section" id="actor-appearances-male">
      <h1 className='table-title'>Top 10 Male Actors with Most Appearances according to IMDB</h1>
      <table>
        <tbody>
        <tr>
          <th>Actors</th>
          <th>Count</th>
        </tr>
        {
          dataList.map(val => {
            return(
              <tr key={uniqid()}>
                <td>{val.first_name} {val.last_name}</td>
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