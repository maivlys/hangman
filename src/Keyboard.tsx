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

// type KeyboardProps = {
//   wordToGuess: string;
//   addGuessedLetter: (letter: string) => void;
//   guessedLetters: string[];
// };

export function Keyboard() {
  //   {
  //   wordToGuess,
  //   addGuessedLetter,
  //   guessedLetters,
  // }: KeyboardProps
  const {
    guessedLetters,
    wordToGuess,
    addGuessedLetter,
    badGuessesArr,
    isGameOverAndLost,
    isGameOverAndWon,
  } = useContext(GlobalContext);

  // const gameOver = badGuessesArr.length >= 7;
  const gameOver = isGameOverAndLost || isGameOverAndWon;

  return (
    <div
      style={{
        display: "flex",
        // gridTemplateColumns: " repeat(auto-fill, minmax(50px, 1fr))",
        gap: ".5rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {KEYS.map((key) => {
        // const gameOver = isGameOverAndLost || isGameOverAndWon;
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

// ${isIncluded ? styles.active : ""}
//             ${isNotIncluded ? styles.inactive : ""}
