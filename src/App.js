import logo from "./logo.svg";
import "./App.css";
const { io } = require("socket.io-client");

function App() {
  const socket = io({
    path: "https://afa-demo.interaktiv.sg/api/",
  });

  socket.on("refetchQueue", (arg) => {
    console.log(arg); // world
  });

  console.log(socket);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
