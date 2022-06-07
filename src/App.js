import React, { useState, useEffect, useRef } from "react";
import "./App.css";
function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleclick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <>
    <h1>Calculator</h1>
    <div className="calc-app">
      <form>
        <input type="text" value={result} ref={inputRef} />
      </form>

      <div className="keypad">
        <button className="highlight" id="clear" onClick={clear}>
          Clear
        </button>
        <button className="highlight" id="backspace" onClick={backspace}>
          C
        </button>
        <button className="highlight" name="+" onClick={handleclick}>
          +
        </button>
        <button name="7" onClick={handleclick}>
          7
        </button>
        <button name="8" onClick={handleclick}>
          8
        </button>
        <button name="9" onClick={handleclick}>
          9
        </button>
        <button className="highlight" name="-" onClick={handleclick}>
          -
        </button>
        <button name="4" onClick={handleclick}>
          4
        </button>
        <button name="5" onClick={handleclick}>
          5
        </button>
        <button name="6" onClick={handleclick}>
          6
        </button>
        <button className="highlight" name="*" onClick={handleclick}>
          X
        </button>
        <button name="1" onClick={handleclick}>
          1
        </button>
        <button name="2" onClick={handleclick}>
          2
        </button>
        <button name="3" onClick={handleclick}>
          3
        </button>
        <button className="highlight" name="/" onClick={handleclick}>
          /
        </button>
        <button name="0" onClick={handleclick}>
          0
        </button>
        <button className="highlight" name="." onClick={handleclick}>
          .
        </button>
        <button className="highlight" id="result" onClick={calculate}>
          Result
        </button>
      </div>
    </div>
    </>
    
  );
}

export default App;
