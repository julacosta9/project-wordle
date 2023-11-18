import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { range, sample } from "../../utils";
import GuessHistory from "../GuessHistory/GuessHistory";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

console.log(range(NUM_OF_GUESSES_ALLOWED));

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessHistory, setGuessHistory] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("GUESS:", guess);

    const nextGuessHistory = guessHistory;
    nextGuessHistory.push(guess);

    setGuessHistory(nextGuessHistory);
    setGuess("");
  }

  return (
    <>
      <p className="guess">
        {range(NUM_OF_GUESSES_ALLOWED).map((number) => {
          // <Guess guess="asdf" />;
          <span className="cell">df</span>;
        })}
      </p>
      <GuessHistory guessHistory={guessHistory} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
