import "./style.scss"
import { useState } from "react"
import Square from "./components/Square"
import Board from './components/Board'
import calculateWinner from "./WinnerCalci"
import Status from "./components/Status"
import History from "./components/History"

const NEW_GAME = [{square : Array(9).fill(null), isNextX: false }];
function App() {
const [history, setHistory] = useState(NEW_GAME)
const [currentMove, setCurrentMove] = useState(0);



const gamingBoard = history[currentMove]


const {winner,winnerSquare} = calculateWinner(gamingBoard.square);

console.log({history, currentMove});
const handleSquareClick = (clickedPosition) => {
if(gamingBoard.square[clickedPosition] || winner){
    return;
}
setHistory((currentHistory) =>{
const isTraversing = currentMove +1 !== currentHistory.length;

const lastGamingState = isTraversing 
? currentHistory[currentMove] 
: currentHistory[currentHistory.length -1];



const nextSquareState = lastGamingState.square.map((squareValue, position) => {
        if(clickedPosition === position){
            if(lastGamingState.isNextX){
                return "X";
            }
            else{
                return "O";
            }
        }else{
       
        return squareValue;
        }
        }
      );
      const base = isTraversing 
      ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+1) 
      : currentHistory;

        return base.concat({
        square: nextSquareState,
        isNextX: !lastGamingState.isNextX,
    
    });

});
setCurrentMove(move => move + 1) 
}
const moveTo = (move) => (
  setCurrentMove(move)
)

const isReset = () => {
  setHistory(NEW_GAME)
  setCurrentMove(0)
}
  

  return (
    <div className="app">
      <h1>TIC <span className="text-orange">TAC</span> TOE</h1>
      <Status winner={winner} gamingBoard={gamingBoard} />
      <Board square={gamingBoard.square} handleSquareClick={handleSquareClick} winnerSquare = {winnerSquare}/>
      
      <button type="button" onClick={isReset} className={`btn-reset ${winner ? "active" : ""}`}>
        Start New Game
      </button>
      <h3>Game History</h3>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>

      <div className="bg-balls"></div>
    </div>
   
  )
}

export default App
