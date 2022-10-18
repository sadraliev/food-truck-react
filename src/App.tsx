import React from "react";
import "./App.css";

const tg = window.window.Telegram.WebApp;

function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>Welcome to wonderland!</div>
        <button className="btn" type="button" onClick={onClose}>
          Close
        </button>
      </header>
    </div>
  );
}

export default App;
