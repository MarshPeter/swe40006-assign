"use client";

import { useState } from "react";
import { add, subtract, multiply } from "../utils/CalFunctions";
import styles from "./Calc.module.css";

const Calculator = () => {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [reaction, setReaction] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(add(Number(numA), Number(numB)));
  };

  const handleSubtraction = () => {
    setResult(subtract(Number(numA), Number(numB)));
  };

  const handleMultiplication = () => {
    setResult(multiply(Number(numA), Number(numB)));
  };

  const asciiReaction = () => {
    if (isNaN(result) || result === '') {
      return "૮(˶ㅠ︿ㅠ)ა";  // If the result is invalid
    } 
    else {
      return "ヾ( ˃ᴗ˂ )◞ • *✰";  // If the result is valid
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setReaction(asciiReaction());
  };

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.calculatorForm}
        onSubmit={handleSubmit}
      >
        <h1 className={styles.heading}>Simple Calculator</h1>
        <div>
          <input
            type="text"
            placeholder="Num A"
            className={styles.inputField}
            value={numA}
            onChange={(e) => setNumA(e.target.value)}
          />
          <input
            type="text"
            placeholder="Num B"
            className={styles.inputField}
            value={numB}
            onChange={(e) => setNumB(e.target.value)}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={handleAddition} className={styles.button}>
            Add
          </button>
          <button onClick={handleSubtraction} className={styles.button}>
            Subtract
          </button>
          <button onClick={handleMultiplication} className={styles.button}>
            Multiply
          </button>
        </div>
        <div className={styles.result}>
          <h2>Results: {result !== null ? result : "No calculation yet"}</h2>
          {reaction && <p>{reaction}</p>}
        </div>
      </form>
    </div>
  );
};

export default Calculator;
