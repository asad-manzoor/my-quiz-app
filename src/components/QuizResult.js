import CelebrationComponent from './CelebrationComponent';


  
function QuizResult(props) {
  const isWinner = props.score >= props.totalScore / 2;

  return (
    <>

      <div className='show-score container'>
        Your Score: {props.score}<br />
        Total Score: {props.totalScore}
        {isWinner ? (
        <div className="celebration">
          <h1>You won!<span>&#128513;</span></h1>
        </div>
      ):(
        <div className="celebration">
          <h1>You lost!<span>&#128546;</span></h1>
        </div>
      )}
      <button className='play-button' onClick={props.tryAgain}>Play again</button>
      </div>
      <CelebrationComponent isWinner={isWinner}/>
    </>
  )
}

export default QuizResult