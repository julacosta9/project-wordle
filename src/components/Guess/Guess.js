import React from "react";

function Guess({ guess }) {
  let letters = guess.split("");
  return (
    <p className="guess">
      {guess ? (
        <>
          <span className="cell">{letters[0]}</span>
          <span className="cell">{letters[1]}</span>
          <span className="cell">{letters[2]}</span>
          <span className="cell">{letters[3]}</span>
          <span className="cell">{letters[4]}</span>
        </>
      ) : (
        <>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </>
      )}
    </p>
  );
}

export default Guess;
