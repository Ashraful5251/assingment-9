import { useState } from "react";
import "./App.css";
import Data from "../data/data.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {Data.map((record) => {
        return <div className="box">{data.title}</div>;
      })}
    </>
  );
}

export default App;
