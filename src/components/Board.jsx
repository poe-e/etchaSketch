import React, { useRef, useState } from 'react';

const Board = (props) => {
    const [board, setBoard] = useState([createBoard()]);
    const isDrawing = useRef(false);
    const flexGridRef = useRef(null);
    let amountOfSquares = 16;
    let boxLength = 0;

    function resetSquares(){
        let squares = document.getElementsByClassName('square');
        for(let i = 0;i<squares.length;i++){
            squares[i].style.background = 'black'
        }
    }

    
    function changeSquares(e){
        boxLength = flexGridRef.current.clientHeight/parseInt(e.target.id);
        amountOfSquares = parseInt(e.target.id);
        let newBoard = [];
        for(let i = 0; i<amountOfSquares; i++){
            let boardRow = [];
            for(let j = 0; j<amountOfSquares; j++){
                boardRow.push(<div className="square" style={{height:boxLength, width:boxLength}}  onClick={(e)=>{props.changeColor(e)}} onMouseDown={()=>{isDrawing.current=true}} onMouseUp={()=>{isDrawing.current=false}} onMouseOver={(e)=>{
                    console.log(isDrawing.current);
                    if(isDrawing.current){
                        props.changeColor(e)
                    }
                }} key={i.toString()+j.toString()}></div>)
            }
            newBoard.push(<div className="board-row" key={i}>{boardRow}</div>)

        }
        setBoard(newBoard);
    }
    
    function createBoard(){
        let starterBoard = [];
        for(let i = 0; i<16; i++){
            let boardRow = [];
            for(let j = 0; j<16; j++){
                boardRow.push(<div className="square" style={{height:'50px', width:'50px'}}  onClick={(e)=>{props.changeColor(e)}} onMouseDown={()=>{isDrawing.current=true}} onMouseUp={()=>{isDrawing.current=false}} onMouseEnter={(e)=>{
                    console.log(isDrawing.current);
                    if(isDrawing.current){
                        props.changeColor(e)
                    }
                }} key={i.toString()+j.toString()}></div>)
            }
            starterBoard.push(<div className="board-row" key={i}>{boardRow}</div>)
        }
        return starterBoard;
    }

    return(
        <div>
            <div>
                <div className='button' id='reset' onClick={()=>{resetSquares()}}>Reset</div>
                <div className='button' id='16' onClick={(e)=>{changeSquares(e);}}>16x16</div>
                <div className='button' id='64' onClick={(e)=>{changeSquares(e);}}>64x64</div>
                <div className='button' id='100' onClick={(e)=>{changeSquares(e); }}>100x100</div>
            </div>
            <div ref={flexGridRef} className="flex-grid">
                {board}
            </div>
        </div>
    );
};

export default Board;

