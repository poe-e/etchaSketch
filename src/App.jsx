
import './App.css';
import Board from './components/Board'

function App() {

  function changeColor(e){
    e.target.style.background = 'orange';
  }

  return (
    <div>
      <div className='container'>
        <Board changeColor={changeColor} />
      </div>
    </div>
  );
}

export default App;
