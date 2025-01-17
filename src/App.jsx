import { useState, useRef, useEffect } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

const App = () => {
  const { width, height } = useWindowSize();

  const generateAllNewDice = () => {
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  };

  const newGameButton = useRef(null);

  const [dice, setDice] = useState(() => generateAllNewDice());

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      newGameButton.current.focus();
    }
  }, [gameWon]);

  const rollDice = () => {
    gameWon
      ? setDice(generateAllNewDice())
      : setDice((prevDice) =>
          prevDice.map((die) =>
            !die.isHeld ? { ...die, value: Math.ceil(Math.random() * 6) } : die
          )
        );
  };

  const hold = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const diceElements = dice.map((num) => (
    <Die
      handleClick={() => {
        hold(num.id);
      }}
      key={num.id}
      value={num.value}
      isHeld={num.isHeld}
    />
  ));

  return (
    <main className="main">
      {gameWon && <ReactConfetti width={width} height={height} />}
      <section className="main__instructions">
        <h2>Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current values between rolls.
        </p>
      </section>

      <div className="main__dice--container">{diceElements}</div>

      <button
        ref={newGameButton}
        onClick={rollDice}
        className="main__roll--button"
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
};

export default App;
