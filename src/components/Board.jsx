import React, { startTransition, useRef, useState } from 'react';
import createBoard from '../helper/createBoard';

const Board = (props) => {
    const [board, setBoard] = useState([createBoard(props)]);
    const [bgColor, setBgColor] = useState('');
    const flexGridRef = useRef(null);
    let amountOfSquares = 16;
    let boxLength = 0;
    let height = '0px';
    let width = '0px'

    function resetSquares(){
        let squares = document.getElementsByClassName('square');
        for(let i = 0;i<squares.length;i++){
            squares[i].style.background = 'black'
        }
    }

    //let board = [];
    function changeSquares(e){

        boxLength = flexGridRef.current.clientHeight/parseInt(e.target.id);
        amountOfSquares = parseInt(e.target.id);
        let newBoard = [];
        for(let i = 0; i<amountOfSquares; i++){
            let boardRow = [];
            for(let j = 0; j<amountOfSquares; j++){
                boardRow.push(<div className="square" style={{height:boxLength, width:boxLength}} onMouseDown={(e)=>{props.changeColor(e)}} key={i.toString()+j.toString()}></div>)
            }
            newBoard.push(<div className="board-row" key={i}>{boardRow}</div>)

        }
        setBoard(newBoard);
    }


    return(
        <div>
            <div>
                <div className='button' id='reset' onClick={()=>{resetSquares()}}>Reset</div>
                <div className='button' id='16' onClick={(e)=>{changeSquares(e);}}>16x16</div>
                <div className='button' id='64' onClick={(e)=>{changeSquares(e);}}>64x64</div>
                <div className='button' id='128' onClick={(e)=>{changeSquares(e); }}>128x128</div>
            </div>
            <div ref={flexGridRef} className="flex-grid">
                {board}
            </div>
        </div>
    );
};

export default Board;

