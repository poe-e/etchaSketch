const Board = (props) => {

    function changeColor(e){
        e.target.style.background = 'red';
    }


    console.log(props)
    let board = [];
    for(let i = 0; i<64; i++){
        let boardRow = [];
        for(let j = 0; j<64; j++){
            boardRow.push(<div className="square" onMouseEnter={changeColor} onClick={props.onClick()} key={i.toString()+j.toString()}></div>)
        }
        board.push(<div key={i}>{boardRow}</div>)
    }
    
    return(
        <div className="board">
            {board}
        </div>
    );
};

export default Board;