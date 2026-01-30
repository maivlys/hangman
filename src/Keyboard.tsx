import styles from "./Keyboard.module.css";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function Keyboard() {
  const {
    guessedLetters,
    wordToGuess,
    addGuessedLetter,
    isGameOverAndLost,
    isGameOverAndWon,
  } = useContext(GlobalContext);

  const gameOver = isGameOverAndLost || isGameOverAndWon;

  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {KEYS.map((key) => {
        const isCorrectlyGuessed =
          guessedLetters.includes(key) && wordToGuess.split("").includes(key);
        const isIncorrectlyGuessed =
          guessedLetters.includes(key) && !wordToGuess.split("").includes(key);
        const isIncluded = gameOver && wordToGuess.includes(key);
        const isNotIncluded = gameOver && !wordToGuess.includes(key);

        return (
          <button
            disabled={isCorrectlyGuessed || isIncorrectlyGuessed || gameOver}
            key={key}
            className={`${styles.button}
            ${isCorrectlyGuessed || isIncluded ? styles.active : ""}
            ${isIncorrectlyGuessed || isNotIncluded ? styles.inactive : ""}

            `}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
