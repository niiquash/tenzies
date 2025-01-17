import React from "react";

const Die = ({ value, isHeld, handleClick }) => {
  const styles = { backgroundColor: isHeld ? "#59e391" : "#ffffff" };

  return (
    <button
      style={styles}
      onClick={handleClick}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, ${isHeld ? "held" : "not held"}`}
      className="main__dice"
    >
      {value}
    </button>
  );
};

export default Die;
