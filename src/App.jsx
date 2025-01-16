import React from "react";

const App = () => {
  return (
    <main className="main">
      <section className="main__instructions">
        <h2>Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current values between rolls.
        </p>
      </section>

      <div className="main__dice--container">
        <div className="main__dice">1</div>
        <div className="main__dice">2</div>
        <div className="main__dice">3</div>
        <div className="main__dice">4</div>
        <div className="main__dice">5</div>
        <div className="main__dice">6</div>
        <div className="main__dice">7</div>
        <div className="main__dice">8</div>
        <div className="main__dice">9</div>
        <div className="main__dice">10</div>
      </div>

      <button className="main__roll--button">Roll</button>
    </main>
  );
};

export default App;
