import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

import words from "../word-list.json";

export const GlobalContext = createContext<any>(null);

type GameProviderProps = {
  children: ReactNode;
};

export function GlobalState({ children }: GameProviderProps) {
  function getWord() {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
  }

  const [wordToGuess, setWordToGuess] = useState<string>(
    words[Math.floor(Math.random() * words.length)],
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const badGuessesArr = guessedLetters.filter((item) => {
    return (
      guessedLetters.includes(item) && !wordToGuess.split("").includes(item)
    );
  });

  const isGameOverAndLost = badGuessesArr.length >= 7;

  const isGameOverAndWon = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  function addGuessedLetter(letter: string) {
    setGuessedLetters((current) => [...current, letter]);
  }

  useEffect(() => {
    setGuessedLetters([]);
    getWord();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        wordToGuess,
        guessedLetters,
        setGuessedLetters,
        addGuessedLetter,
        badGuessesArr,
        isGameOverAndLost,
        isGameOverAndWon,
        setWordToGuess,
        getWord,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
