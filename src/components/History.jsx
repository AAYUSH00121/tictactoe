function History({history, moveTo, currentMove}){
    return(
        <div className="history-wrapper">
           <ul className="history">
            {history.map((_,index)=>(
                <li key={index} className="li">
                 <button type="button" className={`btn-move ${currentMove === index ? 'active' : ""}`} onClick={()=>moveTo(index)}>
                    {index === 0 ? "Start The Game" : `Go to Move ${index}`}
                 </button>
                </li>
        ))}
        </ul>
        </div>
    )

}
export default History;