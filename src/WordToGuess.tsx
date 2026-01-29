import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

// type WordToGuessProps = {
//   wordToGuess: string;
// };

export function WordToGuess() {
  const { guessedLetters, wordToGuess } = useContext(GlobalContext);
  const wordToGuessArr = wordToGuess.split("");
  // console.log(wordToGuessArr);

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
            }}
            key={i}
          >
            {letter}
          </div>
        ))}
      </div>
    </>
  );
}
