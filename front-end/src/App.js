import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnswerButton } from "./components/AnswerButton";
import Joker from "./components/Joker";
import { generateRandomElements } from "./auxiliary/helperMethods";
import questions from './assets/perguntas.json'
import './index.css'
import './App.css'

import "./App.css";

function App() {
    const [index, setIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [jokers, setjokers] = useState(["","","","","","",""]);
    const [disabledAnswers, setDisabledAnswers] = useState([])


    // ** MANAGES ANSWERS AND POINTS
    const evaluateAnswer = (e) => {
        setPoints((prevState) =>
            e.target.value === questions[index].correct
                ? prevState + 100
                : (prevState - 150) > 0 ? prevState - 150 : 0
        );

        setIndex((prevState) => prevState + 1);
        setDisabledAnswers([])
    };

    // ** MANAGES jokers USAGE


    const handlejokersClick = () => {
        const wrongElements = questions[index].options.filter(
            (answer) => answer !== questions[index].correct
        );



        // !! CHANGE IT BACK TO INSIDE THE IF STATEMENT => TESTING !! =>
        setjokers((prevState) => prevState.slice(0, prevState.length - 1));
        if (disabledAnswers.length < 2 && jokers.length > 0) {

            setDisabledAnswers(generateRandomElements(wrongElements))

        }
    };


    // ** MANAGES GAME RESTART
    const resetGame = () => {
        setIndex(0)
        setPoints(0)
        setjokers(["","","","","","",""])
        setDisabledAnswers([])
    }




    return (
        <div className="h-screen bg-slate-300 flex ">

            {/*  <h2>{points} pontos</h2> */}
            <div className='flex'>

                <div className="bg-slate-300 border-red-300 h-full">
                    {jokers.map(joker => <Joker />)}

                </div>

                <div className="flex-row" >
                    <div className='bg-gradient-to-b from-top-blue-gradient to-bot-blue-gradient h-16'>
                        {questions[index] !== undefined ? <h3>{questions[index]?.prompt}</h3> : <button onClick={resetGame}>Reiniciar</button>}
                    </div>


                    <div>
                        {questions[index]?.options.map((answer) => (
                            <AnswerButton
                                disabledAnswers={disabledAnswers}
                                key={uuidv4()}
                                option={answer}
                                checkAnswer={(e) => evaluateAnswer(e)} />
                        ))}
                    </div>
                </div>



            </div>
            <button onClick={() => handlejokersClick()}>Usar jokers</button>
        </div>
    );
}

export default App;
