import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          UTS<br></br>
          Nama : Zakaria Dwi Arman Maulana<br></br>
          NIM : 2103040043
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>List Tugas:</h2>
        <a classname="button" href="Image" rel="noopener noreferrer">
          Menampilkan gambar
        </a>
        <a classname="button" href="propt" >
          materi props
        </a>
      </header>
    </div>
  );
}

export default App;
