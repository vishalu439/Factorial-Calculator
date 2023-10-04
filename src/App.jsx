import React, { useState, useMemo } from "react";
import "./App.css";

export default function App() {
  const [input, setinput] = useState("");
  const [number, setnumber] = useState(0);
  const factorial = useMemo(() => {
    let ans = 1;
    console.log(number);
    for (let i = 1; i <= number; i++) {
      ans *= i;
    }
    console.log(ans);
    return ans;
  }, [number]);

  const clickHandler = () => {
    setnumber(input);
    setinput("");
  };
  return (
    <>
      <h1>factorial calculator</h1>

      <div className="container">
        <label htmlFor="factorial">Enter Number</label>
        <input
          id="factorial"
          type="text"
          value={input}
          onChange={(e) => setinput(+e.target.value)}
        />
        <button onClick={clickHandler}>calculate factorial</button>
        {number && <h3>{`${number}!= ${factorial}`}</h3>}
      </div>
    </>
  );
}
