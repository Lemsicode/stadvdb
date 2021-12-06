import React, { useState, useEffect } from "react";
import './styles/App.css';
import Axios from 'axios';
import Menu from "./components/menu";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

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
        <h1>Average Rank per Genre</h1>
          <BarChart width={1570} height={350} data={dataList}>
            <CartesianGrid strokeDasharray="3 3" stroke='black'/>
            <XAxis dataKey='genre'/>
            <YAxis dataKey='Rank' />
            <Tooltip />
            <Legend />
            <Bar dataKey='Rank' fill="#f6c700" />
          </BarChart>
      </div>
    </div>
  );
}

export default App;
