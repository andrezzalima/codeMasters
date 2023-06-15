import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AnswerButton } from "./AnswerButton";
//css
import "./Quiz.css";

function Quiz() {
  const [percentage, setPercentage] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setAnswers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const totalQuestions = 10;

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

  const evaluateAnswer = async (e) => {
    const selectedAnswer = e.target.value;
    const questionId = questions[questionNumber]._id;

    const response = await fetch("/api/validate-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questionId, userAnswer: selectedAnswer }),
    });

    if (response.status === 200) {
      const { isCorrect } = await response.json();
      setAnswers((previousAnswrs) => {
        return [...previousAnswrs, isCorrect];
      });

      setQuestionNumber((prevNumber) => {
        if (prevNumber + 1 === totalQuestions) {
          // calculatePercentage([...userAnswers, isCorrect]);
          savePorcentage([...userAnswers, isCorrect]);
        }
        return prevNumber + 1;
      });
    }
  };

  const calculatePercentage = (userAnswers) => {
    console.log("hey", userAnswers);
    const percentage =
      (userAnswers.filter((e) => e === true).length / totalQuestions) * 100;
    console.log(percentage);
    setPercentage(percentage.toFixed(0));
    return percentage.toFixed(0);
  };

  const savePorcentage = async (userAnswers) => {
    const percentage = calculatePercentage(userAnswers);

    const response = await fetch("/api/save-percentage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ percentage: percentage }),
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <div className="h-screen bg-slate-300 flex background-quiz">
      <h1 className="h1-quiz">
        Pergunta nº: {questionNumber}/{totalQuestions}
      </h1>

      <div className="questions">
        {questionNumber <= totalQuestions - 1 ? (
          <div>
            {questions.length > 0 && (
              <div>
                <div className="question">
                  {questions[questionNumber] !== undefined ? (
                    <h2 className="h2-quiz">
                      {questions[questionNumber]?.prompt}
                    </h2>
                  ) : (
                    ""
                  )}
                </div>

                <div className="answers">
                  {questions[questionNumber]?.options.map((answer) => {
                    return (
                      <AnswerButton
                        className="oneAnswer"
                        key={uuidv4()}
                        option={answer}
                        checkAnswer={(e) => evaluateAnswer(e)}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="finish-quiz-mesage">
            <h2>Você concluiu o quiz!</h2>
            <p>Você acertou: {percentage}%</p>

            {percentage >= 90 ? (
              <Link to="/signup">
                <button className="perfil-codeMaster">
                  <span className="parabens">Parabéns!</span> <br></br>Cria teu perfil codeMaster.
                </button>
              </Link>
            ) : (
              <div>Estuda um pouco mais e volta a tentar!</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
