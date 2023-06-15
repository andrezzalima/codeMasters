import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnswerButton } from "./AnswerButton";
//css
import "./Quiz.css"

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
        const shuffledQuestions = shuffleArray(json);
        const selectedQuestions = shuffledQuestions.slice(0, 10);
        setQuestions(selectedQuestions);
      }
    }

    fetchQuestions();
  }, []);

  // Função para embaralhar as perguntas
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // ** MANAGES ANSWERS AND POINTS
  const evaluateAnswer = async (e) => {
    const selectedAnswer = e.target.value;
    const questionId = questions[index]._id;

    const response = await fetch("/api/validate-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questionId, userAnswer: selectedAnswer }),
    });

    if (response.status === 200) {
      const { isCorrectAnswer, pointsEarned } = await response.json();

      if (isCorrectAnswer) {
        setPoints((prevPoints) => prevPoints + pointsEarned);
      }

      setIndex((prevIndex) => prevIndex + 1);
      setDisabledAnswers([]);
    }
  };


  // Calcular porcentagem de perguntas corretas
  const calculatePercentage = () => {
    const correctAnswers = questions.filter((question) => question.correct === question.userAnswer);
    const percentage = (correctAnswers.length / questions.length) * 100;
    return percentage.toFixed(2);
  };

  return (
    <div className="h-screen bg-slate-300 flex background-quiz" >
       {/* <h2>{points} pontos</h2> */} 
       <h1 className="h1-quiz">Pergunta nº: {index+1}/10</h1>
              
      <div className="questions"> 
        <div>
          <div className="question">
            {questions[index] !== undefined ? (
              <h2 className="h2-quiz">{questions[index]?.prompt}</h2>
            ): ''}
          </div>

          <div className="answers">
            {questions[index]?.options.map((answer) => (
              <AnswerButton 
                className="oneAnswer"
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
