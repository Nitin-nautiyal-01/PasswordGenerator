import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./data/passchar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passLength, setPassLength] = useState(10);
  let [finalPassword,setFinalPass] = useState('');

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
 
      for(let i=0 ; i<passLength ; i++){
        finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length));
      }
      setFinalPass(finalPass);
    } else {
      alert("Select one checkbox");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(finalPassword)
  }
  return (
    <div className="App">
      <div className="div01">
        <h2>Password Generator</h2>

        <div className="div01-01">
          <input type="text" readOnly value={finalPassword} /> <button className="btn01" onClick={copyPass}>Copy</button>
        </div>

        <div className="div01-02">
          <label>Password Length</label>
          <input
            type="number"
            max={20}
            min={10}
            value={passLength}
            onChange={(event) => setPassLength(event.target.value)}
          />
        </div>

        <div className="div01-02">
          <label>Include UpperCase</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="div01-02">
          <label>Include LowerCase</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="div01-02">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>

        <div className="div01-02">
          <label>Include Symbol</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
        </div>

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
