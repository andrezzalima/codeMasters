export function AnswerButton({ disabledAnswers, option, checkAnswer }) {
  return (
    <button className="border" value={option} onClick={(e) => checkAnswer(e)}>
      {option}
    </button>
  );
}
