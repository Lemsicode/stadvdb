import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import uniqid from 'uniqid';

export default function ActorAppearancesFemale() {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/GET/actor-appearances-female').then((response) => {
      setDataList(response.data);
    });
  }, [])

  return(
    <div className="table-container section" id="actor-appearances-female">
      <h1 className='table-title'>Female Actors with Most Appearances according to IMDB</h1>
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