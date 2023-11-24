import React, { useState } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';


function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, SetScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [flag, setflag] = useState(false);
    

    const ChangeQuestion = () => {
        updatescore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
            setflag(false);
        }
        else {
            setShowResult(true)
        }
    }

    const updatescore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            SetScore(score + 1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        SetScore(0);
    }
    return (
        <div className="Quiz">
            <h1 className='heading-txt'>My Quiz App</h1>
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
            ) : (
                <>
                    <div className="container">
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1} </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        // className="option-btn"
                                        className={`option-btn ${
                            clickedOption === i+1?"checked":null
                        }`}
                                        key={i}
                                        // onClick={() => setClickedOption(i + 1)}
                                        onClick={() => {
                                            setClickedOption(i + 1);
                                            
                                            setflag(true);
                                        }}
                                    >
                                        {option}
            
                                    </button>
                                )
                            })}
                        </div>
                        
                        {flag ?<input type="button" onClick={ChangeQuestion} value="Next" id="next-button" /> : null }
                    </div>
                </>)}
        </div>
    );
}

export default Quiz; 