import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card">
      <p className="date">{format(time, "PP")}</p>
      <p className="time">{format(time, "hh:mm:ss a")}</p>
    </div>
  );
}

export default App;
