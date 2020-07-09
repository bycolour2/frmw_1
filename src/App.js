import React, { useState } from "react";
import "./App.css";

const createInputs = (count, text) => {
  const inputArray = [];
  for (let i = 0; i < count; i++) {
    inputArray.push(<input value={text} key={i + 1} readOnly />);
  }
  return inputArray;
};

const App = () => {
  const [count, setCount] = useState("");
  const [text, setText] = useState("");
  const [inputArray, setInputArray] = useState([]);

  const countHandler = (e) => {
    const count = e.target.value;
    setCount(count);
    const inputArray = createInputs(count, text);
    setInputArray(inputArray);
  };

  const textHandler = (e) => {
    const text = e.target.value;
    setText(text);
		const inputArray = createInputs(count, text);
		setInputArray(inputArray);
  };

  return (
    <div className="App">
      <div>
        <input value={count} onChange={countHandler} />
        <input value={text} onChange={textHandler} />
      </div>
      <div>{inputArray.map((element) => element)}</div>
    </div>
  );
};

export default App;
