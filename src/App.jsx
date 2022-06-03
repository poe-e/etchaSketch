
import './App.css';
import Board from './components/Board'

function App() {


  function handleClick() {
    console.log('Clicked')
  }
  function changeColor(e){
    e.target.style.background = 'orange';
  }
  function resetSquares(){
    document.getElementsByClassName('square').style.background='black'
  }
  function changeSquares(e){
    console.log(e.target)
    if(e.target.id === 'sixteen'){
      //document.getElementsByClassName('squares').style.background
    }
    else if(e.target.id === 'sixfour'){

    }
    else if(e.target.id === 'onetwoeight'){

    }
  }

  return (
    <div>
      <div className='container'>
        <div>
          <div className='button' id='reset' onClick={resetSquares}>Reset</div>
          <div className='button' id='sixteen' onClick={(e)=>{changeSquares(e)}}>16x16</div>
          <div className='button' id='sixfour' onClick={(e)=>{changeSquares(e)}}>64x64</div>
          <div className='button' id='onetwoeight' onClick={(e)=>{changeSquares(e)}}>128x128</div>
        </div>
        <Board onClick={()=>handleClick} onHover={changeColor} />
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
