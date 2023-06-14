import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnswerButton } from "./AnswerButton";
// import { generateRandomElements } from "./auxiliary/helperMethods";
//import questions from './assets/perguntas.json'

function Quiz() {
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [jokers, setjokers] = useState(["", "", "", "", "", "", ""]);
  const [disabledAnswers, setDisabledAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  //Carregar questoes
  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch("/api/questions");
      if (res.status === 200) {
        const json = await res.json();
        setQuestions(json);
      }
    }

    fetchQuestions();
  }, []);

  // ** MANAGES ANSWERS AND POINTS
  const evaluateAnswer = async (e) => {
    // setPoints((prevState) =>
    //   e.target.value === questions[index].correct
    //     ? prevState + 100
    //     : prevState - 150 > 0
    //     ? prevState - 150
    //     : 0
    // );
    console.log(e);
    fetch("/api/validate-question", {
      method: "POST",
    });

    // setIndex((prevState) => prevState + 1);
    // setDisabledAnswers([]);
  };

  // ** MANAGES jokers USAGE

  // ** MANAGES GAME RESTART
  const resetGame = () => {
    setIndex(0);
    setPoints(0);
    setjokers(["", "", "", "", "", "", ""]);
    setDisabledAnswers([]);
  };

  return (
    <div className="h-screen bg-slate-300 flex ">
      {/*  <h2>{points} pontos</h2> */}
      <div className="flex">
        <div className="flex-row">
          <div className="bg-gradient-to-b from-top-blue-gradient to-bot-blue-gradient h-16">
            {questions[index] !== undefined ? (
              <h3>{questions[index]?.prompt}</h3>
            ) : (
              <button onClick={resetGame}>Reiniciar</button>
            )}
          </div>

          <div>
            {questions[index]?.options.map((answer) => (
              <AnswerButton
                disabledAnswers={disabledAnswers}
                key={uuidv4()}
                option={answer}
                checkAnswer={(e) => evaluateAnswer(e)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
