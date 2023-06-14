export function AnswerButton({disabledAnswers, option, checkAnswer}) {
    
    return (
        <button
            className="border"
            disabled={disabledAnswers.includes(option)}
            value={option}
            onClick={(e) => checkAnswer(e)}
        >
            {option}
        </button>
    )
}