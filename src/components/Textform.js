import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const covertUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const covertLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container my-3"style={{color : props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <b> Enter Your Text Here :</b>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={5}
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}}
        />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={covertUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={covertLowerCase}
        >
          Convert to Lowercase
        </button>
      </div>
      <div className="my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Preview :</h2>
        <p>{text}</p>
        <h2>Your Text Summary Contains :</h2>
        <p>{text.split(" ").length} words {text.length} charachters</p>
      </div>
    </div>
  );
}
