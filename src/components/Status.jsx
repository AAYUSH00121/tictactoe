
function Status({winner, gamingBoard}){
    const {square, isNextX} = gamingBoard;
    const nextPlayer = isNextX ? "X"  : "O"
    const noMoveLeft = square.every((squareValue)=> squareValue != null)

function statusMsg(){
if(winner){
    return <>Winner is <span className={winner === "X" ? "text-green": "text-orange"}>{winner}</span></>
}
if(!winner && noMoveLeft ){
    return <>This game is Tied between <span className="text-green">X</span> and <span className="text-orange">O</span></>
}
if(!winner && !noMoveLeft){
    return <>The next player is {" "} <span className={isNextX ? "text-green":"text-orange"}>{nextPlayer}</span></>

}
return null;
}


return(
    <h2 className="status-message">{statusMsg()}</h2>
)
}
export default Status;

