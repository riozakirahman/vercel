import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const fetchInfo = async () => {
    const url = `${process.env.REACT_APP_API_URL}/test`;
    const response = await fetch(url);
    const data = await response.json();
    setResult(data);
  };
  return (
    <div>
      <button onClick={fetchInfo}>Fetch Data From Api</button>
      <p>result: {result}</p>
    </div>
  );
}

export default App;
