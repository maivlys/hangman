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
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    // return words[Math.floor(Math.random() * words.length)];
  }
  // const [wordToGuess, setWordToGuess] = useState<string>(getWord);
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
