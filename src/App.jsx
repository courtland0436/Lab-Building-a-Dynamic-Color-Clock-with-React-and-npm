import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app">
      {}
      <img src={logo} alt="Logo" className="logo" />

      {}
      <div className="card-wrapper">
        <div className="card">
          <p className="date">{format(time, "PP")}</p>
          <p className="time">{format(time, "hh:mm:ss a")}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
