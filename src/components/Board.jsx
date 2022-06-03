const Board = (props) => {



    console.log(props)
    let board = [];
    for(let i = 0; i<16; i++){
        let boardRow = [];
        for(let j = 0; j<16; j++){
            boardRow.push(<div className="square" onMouseEnter={(e)=>{props.onHover(e)}} onClick={props.onClick()} key={i.toString()+j.toString()}></div>)
        }
        board.push(<div className="board-row" key={i}>{boardRow}</div>)
    }
 
   
    return(
        <div className="flex-grid">
            {board}
        </div>
    );
};

export default Board;