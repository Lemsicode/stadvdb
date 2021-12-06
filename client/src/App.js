import React, { useState, useEffect } from "react";
import './styles/App.css';
import Axios from 'axios';
import Uniqid from 'uniqid';
import Menu from "./components/menu";

function App() {

  const [dataList, setDataList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/query').then((response) => {
      setDataList(response.data);
    })
  }, [])


  return (
    <div className="App">
      <Menu />
      <div className="graph">
        <h1>STADVDB</h1>
      {
        dataList.map((val) => {
          return (
            <h1 key={Uniqid()}>
              ID: {val.id} | Name: {val.name} | Year: {val.year} | Rank: {val.rank}
            </h1>
          );
        })
      }
      </div>
    </div>
  );
}

export default App;
