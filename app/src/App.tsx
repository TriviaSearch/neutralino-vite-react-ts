import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("user");

  useEffect(() => {
    const key = NL_OS == "Windows" ? "USERNAME" : "USER";
    Neutralino.os.getEnv(key).then(setUsername).catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Vite + React, I am <strong>{username}</strong>, nice to meet
          you!
        </p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://neutralino.js.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neutralino Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
