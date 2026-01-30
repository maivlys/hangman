import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const HEAD = (
  <div
    style={{
      backgroundColor: "none",
      height: "80px",
      width: "80px",
      borderRadius: "50%",
      border: "10px solid whitesmoke",
      position: "absolute",
      top: "50px",
      left: "155px",
    }}
  ></div>
);
const BODY = (
  <div
    style={{
      backgroundColor: "whitesmoke ",
      width: "10px",
      height: "60px",
      translate: "100px",
      position: "absolute",
      top: "129px",
      right: "100px",
    }}
  ></div>
);
const RIGHT_ARM = (
  <div
    style={{
      backgroundColor: "whitesmoke ",
      width: "10px",
      height: "60px",
      translate: "100px",
      position: "absolute",
      top: "120px",
      right: "80px",
      rotate: "45deg",
    }}
  ></div>
);
const LEFT_ARM = (
  <div
    style={{
      backgroundColor: "whitesmoke ",
      width: "10px",
      height: "60px",
      translate: "100px",
      position: "absolute",
      top: "120px",
      right: "120px",
      rotate: "-45deg",
    }}
  ></div>
);
const RIGHT_LEG = (
  <div
    style={{
      backgroundColor: "whitesmoke ",
      width: "10px",
      height: "60px",
      translate: "100px",
      position: "absolute",
      top: "175px",
      right: "80px",
      rotate: "-45deg",
    }}
  ></div>
);
const LEFT_LEG = (
  <div
    style={{
      backgroundColor: "whitesmoke ",
      width: "10px",
      height: "60px",
      translate: "100px",
      position: "absolute",
      top: "175px",
      right: "120px",
      rotate: "45deg",
    }}
  ></div>
);
const FACE = (
  <div
    style={{
      height: "50px",
      width: "50px",
      translate: "100px",
      position: "absolute",
      top: "65px",
      right: "79px",
    }}
  >
    <img
      src="/face.svg"
      alt="hangman-eyes"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG, FACE];

export function Hangman() {
  const { badGuessesArr } = useContext(GlobalContext);

  return (
    <>
      <div
        style={{ position: "relative", marginTop: "80px", maxWidth: "200px" }}
      >
        <div
          style={{
            backgroundColor: "whitesmoke",
            height: "10px",
            width: "100px",
            marginLeft: "95px",
          }}
        />
        {BODY_PARTS.slice(0, badGuessesArr.length)}
        <div
          style={{
            backgroundColor: "whitesmoke ",
            width: "10px",
            height: "50px",
            translate: "100px",
            position: "absolute",
            top: "0",
            right: "100px",
          }}
        />
        <div
          style={{
            backgroundColor: "whitesmoke",
            width: "10px",
            height: "300px",
            marginLeft: "95px",
          }}
        />
        <div
          style={{
            backgroundColor: "whitesmoke",
            height: "10px",
            width: "200px",
            marginBottom: "2rem",
          }}
        />
      </div>
    </>
  );
}
