  import React, { useState, useEffect } from "react";
  import Button from "./Button";
  import './Calculator.css';
  // import 'bootstrap/dist/css/bootstrap.min.css';

  const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (label) => {
      if (label === "=") {
        try {
          setResult(eval(input)); // Safely evaluates the input for the result
        } catch {
          setResult("Error"); // Handles invalid expressions
        }
      } else if (label === "C") {
        setInput("");
        setResult("");
      } else if (label === "⌫") {
        setInput(input.slice(0, -1)); // Removes the last character
      } else {
        setInput(input + label);
      }
    };
    const handleKeyPress = (event) => {
      const { key } = event;
    
      if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
        setInput((prev) => prev + key); // Appends numbers or operators
      } else if (key === "Enter") {
        handleClick("="); // Calculates result when Enter is pressed
      } else if (key === "Backspace") {
        handleClick("⌫"); // Removes the last character
      } else if (key === "Escape") {
        handleClick("C"); // Clears input
      }
    };
    
    
    useEffect(() => {
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }, []);

    return (
      <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Calculator</h4>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control text-end fs-5"
                value={input}
                readOnly
                placeholder="Input"
                style={{ fontWeight: "bold", backgroundColor: "#f8f9fa" }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control text-end fs-5"
                value={result}
                readOnly
                placeholder="Result"
                style={{ fontWeight: "bold", backgroundColor: "#e9ecef" }}
              />
            </div>
          </div>
          <div className="row">
            {["1", "2", "3", "+"].map((label) => (
              <div className="col-3 mb-2" key={label}>
                <Button
                  label={label}
                  onClick={() => handleClick(label)}
                  className="btn custom-btn w-100 shadow-sm rounded-pill"
                />
              </div>
            ))}
          </div>
          <div className="row">
            {["4", "5", "6", "-"].map((label) => (
              <div className="col-3 mb-2" key={label}>
                <Button
                  label={label}
                  onClick={() => handleClick(label)}
                  className="btn custom-btn w-100 shadow-sm rounded-pill"
                />
              </div>
            ))}
          </div>
          <div className="row">
            {["7", "8", "9", "*"].map((label) => (
              <div className="col-3 mb-2" key={label}>
                <Button
                  label={label}
                  onClick={() => handleClick(label)}
                  className="btn custom-btn w-100 shadow-sm rounded-pill"
                />
              </div>
            ))}
          </div>
          <div className="row">
            {["C", "0", "=", "/"].map((label) => (
              <div className="col-3 mb-2" key={label}>
                <Button
                  label={label}
                  onClick={() => handleClick(label)}
                  className={`btn w-100 shadow-sm rounded-pill ${
                    label === "=" ? "btn-equal" : "btn-special"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-3 mb-2">
              <Button
                label="⌫"
                onClick={() => handleClick("⌫")}
                className="btn btn-outline-dark w-100 shadow-sm rounded-pill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
  };

  export default Calculator;
