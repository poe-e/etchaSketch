

function createBoard(props){
    let starterBoard = [];
    for(let i = 0; i<16; i++){
        let boardRow = [];
        for(let j = 0; j<16; j++){
            boardRow.push(<div className="square" style={{height:'50px', width:'50px'}} onMouseEnter={(e)=>{props.changeColor(e)}} key={i.toString()+j.toString()}></div>)
        }
        starterBoard.push(<div className="board-row" key={i}>{boardRow}</div>)
    }
    return starterBoard;
}

export default createBoard;