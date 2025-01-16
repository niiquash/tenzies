import { useState, useEffect } from "react";
import Die from "./components/Die";

const App = () => {
  const generateAllNewDice = () => {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  };

  const [dice, setDice] = useState(generateAllNewDice());

  const diceElements = dice.map((num, idx) => <Die key={idx} value={num} />);

  const getNewDice = () => {
    setDice(generateAllNewDice());
  };
  return (
    <main className="main">
      <section className="main__instructions">
        <h2>Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current values between rolls.
        </p>
      </section>

      <div className="main__dice--container">{diceElements}</div>

      <button onClick={getNewDice} className="main__roll--button">
        Roll
      </button>
    </main>
  );
};

export default App;
