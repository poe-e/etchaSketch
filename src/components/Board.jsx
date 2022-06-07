import React, { useRef, useState } from 'react';

const Board = (props) => {
    const [board, setBoard] = useState([createBoard()]);
    const isDrawing = useRef(false);
    const rainbowColour = useRef(false);
    const flexGridRef = useRef(null);
    let amountOfSquares = 16;
    let boxLength = 0;

    function resetSquares(){
        let squares = document.getElementsByClassName('square');
        for(let i = 0;i<squares.length;i++){
            squares[i].style.background = '#eaeef1'
        }
    }

    function changeColor(e){
        let colour = '#282c34'
        if(rainbowColour.current){
            console.log(e.target.style.backgroundColor);
            colour = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.background = '#'+colour
        }
        else{
            e.target.style.background = '#282c34';
        }
      }

    function toggleRainbow(e){
        console.log('Here')
        if(rainbowColour.current){
            e.target.style.background = '#D3D3D3'
        }
        else{
            e.target.style.background = '#e4e6ec'
        }
    }
    
    function changeSquares(e){
        let buttons = document.getElementsByClassName('buttonSize');
        for(const i of buttons){
            i.style.background = '#e4e6ec';
        }
        e.target.style.background = '#D3D3D3';

        boxLength = flexGridRef.current.clientHeight/parseInt(e.target.id);
        amountOfSquares = parseInt(e.target.id);
        let newBoard = [];
        for(let i = 0; i<amountOfSquares; i++){
            let boardRow = [];
            for(let j = 0; j<amountOfSquares; j++){
                boardRow.push(<div draggable="false" className="square" style={{height:boxLength, width:boxLength}} onDrag={()=>{isDrawing.current = false;}} onClick={(e)=>{changeColor(e)}} onMouseDown={(e)=>{e.preventDefault();isDrawing.current=true}} onMouseUp={()=>{isDrawing.current=false}} onMouseOver={(e)=>{
                    if(isDrawing.current){
                        changeColor(e)
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
                boardRow.push(<div className="square" style={{height:'50px', width:'50px'}} onDrag={()=>{isDrawing.current = false;}}  onClick={(e)=>{changeColor(e)}} onMouseDown={(e)=>{e.preventDefault(); isDrawing.current=true}} onMouseUp={()=>{isDrawing.current=false}} onMouseEnter={(e)=>{
                    if(isDrawing.current){
                        changeColor(e);
                    }
                }} key={i.toString()+j.toString()}></div>)
            }
            starterBoard.push(<div className="board-row" key={i}>{boardRow}</div>)
        }
        return starterBoard;
    }

    return(
        <div className='outerContainer'>
            <div className='innerContainer'>
                <div className='title'>
                    Etch
                </div>
                <div className='title'>
                    -a-
                </div>
                <div className='title'>
                    Sketch
                </div>
                <div className='buttonGroup'>
                    <div className='buttonSize' id='16' onClick={(e)=>{changeSquares(e); resetSquares();}}>16x16</div>
                    <div className='buttonSize' id='64' onClick={(e)=>{changeSquares(e); resetSquares();}}>64x64</div>
                    <div className='buttonSize' id='100' onClick={(e)=>{changeSquares(e); resetSquares();}}>100x100</div>
                    <div className='button' id='rainbow' onClick={(e)=>{rainbowColour.current=!rainbowColour.current; toggleRainbow(e)}}>Rainbow</div>
                    <div className='button' id='reset' onClick={()=>{resetSquares();}}>Clear</div>
                </div>
            </div>
            <div className='gridBox'>
                <div ref={flexGridRef} className="flex-grid">
                    {board}
                </div>
            </div>
        </div>
    );
};

export default Board;

