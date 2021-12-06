import './App.css';

function App() {
  return (
    <div className="App">
      <h1>STADVDB</h1>

      <div className="form">
        <label>Movie Name:</label>
        <input type="text" name="movieName"/>

        <label>Director's Name:</label>
        <input type="text" name="directorName"/>

        <label>Genre:</label>
        <input type="text" name="genreName"/>
      </div>
    </div>
  );
}

export default App;
