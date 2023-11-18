import React from "react";

function GuessHistory({ guessHistory }) {
  return (
    <div className="guess-results">
      {guessHistory.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessHistory;
