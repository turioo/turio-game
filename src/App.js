import "./App.css";
import shuffle from "./api/sits";
import Pixel from "./Pixel";
import { useState } from "react";

function App() {
  let i = 0;
  let winner = [];
  let winnerFirst = [1, 2, 3];
  let winnerSecond = [4, 5, 6];
  let winnerThird = [7, 8, 9];
  let winnerRandom = [];
  let winnerLine;
  const [result, setResult] = useState("Знайди 3 однакових картки");
  const [textVisible, setTextVisible] = useState("hidden");
  const countCLick = (id) => {
    if (i === 0) {
      if (id === 1 || id === 2 || id === 3) {
        winnerRandom = winnerFirst;
      }
      if (id === 4 || id === 5 || id === 6) {
        winnerRandom = winnerSecond;
      }
      if (id === 7 || id === 8 || id === 9) {
        winnerRandom = winnerThird;
      }
    }
    if (id === 7 || id)
      if (i < 2) {
        i++;
        winner.push(id);
      } else {
        winner.push(id);
        winnerLine =
          winner.length === winnerRandom.length &&
          winner.sort().every(function (value, index) {
            return value === winnerRandom.sort()[index];
          });
        if (winnerLine === true) {
          setResult("Ти виграв!");
          setTextVisible("visible");
        } else {
          setResult("Ти програв!");
          setTextVisible("visible");
        }
        i = 0;
        winner = [];
      }
  };

  return (
    <div className="App">
      <div className="label">{result}</div>

      <div
        className="button"
        style={{ visibility: textVisible }}
        onClick={() => window.location.reload(false)}
      >
        Грати ще раз
      </div>

      <div className="game">
        {shuffle.map((e) => {
          return <Pixel id={e.id} type={e.type} click={countCLick} />;
        })}
      </div>
    </div>
  );
}

export default App;
