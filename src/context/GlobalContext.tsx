import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import words from "../word-list.json";

export const GlobalContext = createContext<any>(null);

// export const useGlobalContext = () => useContext(GlobalContext);

type GameProviderProps = {
  children: ReactNode;
};

export function GlobalState({ children }: GameProviderProps) {
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
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

  // -----

  function gameOver() {
    if (isGameOverAndLost) {
      console.log("lost");
    }
    if (isGameOverAndWon) {
      console.log("won");
    }
  }

  gameOver();

  // -----

  function addGuessedLetter(letter: string) {
    setGuessedLetters((current) => [...current, letter]);
  }

  useEffect(() => {
    console.log(guessedLetters);
  }, [guessedLetters]);

  useEffect(() => {
    setGuessedLetters([]);
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        wordToGuess,
        guessedLetters,
        addGuessedLetter,
        badGuessesArr,
        isGameOverAndLost,
        isGameOverAndWon,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
