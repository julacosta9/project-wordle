import React from "react";

function GuessInput({ guess, setGuess, handleSubmit }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        title="Guess must be 5 characters long"
      />
    </form>
  );
}

export default GuessInput;
