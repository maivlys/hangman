import { Hangman } from "./Hangman";
import { WordToGuess } from "./WordToGuess";
import { Keyboard } from "./Keyboard";
import "./App.css";
import { use, useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  // function getWord() {
  //   return words[Math.floor(Math.random() * words.length)];
  // }
  // const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  // const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // function addGuessedLetter(letter: string) {
  //   setGuessedLetters((current) => [...current, letter]);
  // }

  // useEffect(() => {
  //   console.log(guessedLetters);
  // }, [guessedLetters]);

  // useEffect(() => {
  //   setGuessedLetters([]);
  // }, []);

  const {
    isGameOverAndLost,
    isGameOverAndWon,
    setGuessedLetters,
    setWordToGuess,
    getWord,
  } = useContext(GlobalContext);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      getWord();
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <>
      <div
        style={{
          color: "white",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ marginTop: "100px", fontSize: "2rem" }}>
            {isGameOverAndLost
              ? "Game over 💔"
              : isGameOverAndWon
                ? "🎉 Well played! 🎉"
                : "Let’s play"}
          </p>
          <Hangman
          // guessedLetters={guessedLetters}
          // wordToGuess={wordToGuess}
          />
          <WordToGuess
          // wordToGuess={wordToGuess}
          />
        </div>
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
          // wordToGuess={wordToGuess}
          // guessedLetters={guessedLetters}
          // addGuessedLetter={addGuessedLetter}
          />
          <button
            style={{
              marginTop: "2rem",
            }}
            onClick={() => window.location.reload()}
          >
            🗘
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
