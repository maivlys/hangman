import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

// type WordToGuessProps = {
//   wordToGuess: string;
// };

export function WordToGuess() {
  const { guessedLetters, wordToGuess, isGameOverAndWon, isGameOverAndLost } =
    useContext(GlobalContext);
  const wordToGuessArr: string[] = wordToGuess.split("");
  // console.log(wordToGuessArr);

  const gameOver = isGameOverAndWon || isGameOverAndLost;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          alignSelf: "stretch",
        }}
      >
        {wordToGuessArr.map((letter, i) => (
          <div
            style={{
              fontSize: "2.2rem",
              borderBottom: "2px solid whitesmoke",
              width: "28px",
              paddingBottom: "4px",
            }}
            key={i}
          >
            <p
              style={{
                visibility:
                  guessedLetters.includes(letter) || isGameOverAndLost
                    ? "visible"
                    : "hidden",
                color: isGameOverAndWon
                  ? "rgba(65, 104, 245, 1)"
                  : isGameOverAndLost
                    ? "red"
                    : "",
              }}
            >
              {letter}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
